// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import api from '../../api/api';
// // import './FullCourseDetails.css';

// // const FullCourseDetails = () => {
// //   const { id } = useParams();
// //   const [course, setCourse] = useState(null);

// //   useEffect(() => {
// //     const fetchCourse = async () => {
// //       try {
// //         const res = await api.get(`/courses/${id}`);
// //         setCourse(res.data);
// //       } catch (err) {
// //         console.error('Error fetching course:', err);
// //       }
// //     };
// //     fetchCourse();
// //   }, [id]);

// //   if (!course) return <p>Loading course details...</p>;

// //   return (
// //     <div className="full-course-container">
// //       <div className="course-modules">
// //         <h3>Modules</h3>
// //         <ul>
// //           {course.modules?.map((module, index) => (
// //             <li key={index}>{module.name}</li>
// //           ))}
// //         </ul>
// //       </div>
// //       <div className="course-details">
// //         <img src={course.image} alt={course.title} />
// //         <h2>{course.title}</h2>
// //         <p>{course.description}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FullCourseDetails;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../../api/api';
// import './FullCourseDetails.css'; // Optional: add custom styles

// const FullCourseDetails = () => {
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

//   if (!course) return <p>Loading course...</p>;

//   return (
//     <div style={{ display: 'flex', padding: '20px', gap: '20px' }}>
//       {/* Left: Modules */}
//       <div style={{ width: '30%', borderRight: '1px solid #ccc', paddingRight: '20px' }}>
//         <h3>Modules</h3>
//         {course.modules?.length ? (
//           <ul style={{ listStyleType: 'none', padding: 0 }}>
//             {course.modules.map((mod, index) => (
//               <li key={index} style={{ marginBottom: '15px' }}>
//                 <strong>{mod.name}</strong>
//                 <p style={{ margin: '5px 0' }}>{mod.description}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No modules found.</p>
//         )}
//       </div>

//       {/* Right: Course details */}
//       <div style={{ width: '70%' }}>
//         <img src={course.image} alt={course.title} style={{ width: '100%', borderRadius: '10px' }} />
//         <h2>{course.title}</h2>
//         <h4>{course.subtitle}</h4>
//         <p>{course.description}</p>
//       </div>
//     </div>
//   );
// };

// export default FullCourseDetails;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import './FullCourseDetails.css';

const FullCourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [openModuleIndex, setOpenModuleIndex] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/courses/${id}`);
        setCourse(res.data);
      } catch (err) {
        console.error('Error fetching course:', err);
      }
    };

    fetchCourse();
  }, [id]);

  const toggleModule = (index) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  if (!course) return <p>Loading course...</p>;

  return (
    <div className="course-details-container">
      {/* Left: Module List */}
      <div className="module-list">
        <h3>Course Modules</h3>
        {course.modules?.length ? (
          <ul>
            {course.modules.map((mod, index) => (
              <li key={index} className="module-item">
                <div
                  className="module-title"
                  onClick={() => toggleModule(index)}
                >
                  {mod.name}
                </div>
                <div className={`module-description ${openModuleIndex === index ? 'open' : ''}`}>
                  <p>{mod.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No modules found.</p>
        )}
      </div>

      {/* Right: Course Details */}
      <div className="course-content">
        <img src={course.image} alt={course.title} className="course-image" />
        <h2>{course.title}</h2>
        <h4>{course.subtitle}</h4>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default FullCourseDetails;
