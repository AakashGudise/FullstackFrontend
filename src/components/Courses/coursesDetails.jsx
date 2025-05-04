

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../../api/api';

// function CourseDetails() {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         const res = await api.get(`/courses/${id}`);
//         setCourse(res.data);
//       } catch (err) {
//         console.error('Error fetching course:', err);
//       }
//     };

//     fetchCourse();
//   }, [id]);

//   if (!course) return <p>Loading...</p>;

//   return (
//     <div style={{ maxWidth: '700px', margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
//       <h2>{course.title}</h2>
//       <img
//         src={`http://localhost:5000/uploads/${course.image}`}
//         alt={course.title}
//         style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px' }}
//       />
//       <p style={{ marginTop: '1rem' }}>{course.description}</p>

//       {course.modules && course.modules.length > 0 && (
//         <div style={{ marginTop: '2rem' }}>
//           <h3>Modules:</h3>
//           <ul style={{ paddingLeft: '1rem' }}>
//             {course.modules.map((mod, index) => (
//               <li key={index} style={{ marginBottom: '1rem' }}>
//                 <strong>{mod.name}</strong>
//                 <p>{mod.description}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CourseDetails;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [userId, setUserId] = useState(null); // From login cookie/localStorage
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/courses/${id}`);
        setCourse(res.data);
      } catch (err) {
        console.error('Error fetching course:', err);
      }
    };

    const student = JSON.parse(localStorage.getItem('user'));
    if (student) setUserId(student._id);

    fetchCourse();
  }, [id]);

  const handleEnroll = async () => {
    try {
      await api.post('/enrollments', { studentId: userId, courseId: id });
      alert('Enrolled successfully!');
      setEnrolled(true);
    } catch (err) {
      alert(err.response?.data?.error || 'Enrollment failed');
    }
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: '700px', margin: 'auto' }}>
      <h2>{course.title}</h2>
      <img src={`http://localhost:5000/uploads/${course.image}`} alt={course.title} style={{ width: '100%' }} />
      <p>{course.description}</p>
      <ul>
        {course.modules?.map((mod, index) => (
          <li key={index}><strong>{mod.title}</strong>: {mod.description}</li>
        ))}
      </ul>

      {userId && (
        <button onClick={handleEnroll} disabled={enrolled}>
          {enrolled ? 'Already Enrolled' : 'Enroll Now'}
        </button>
      )}
    </div>
  );
}

export default CourseDetails;
