// // // // // import React from 'react';
// // // // // import CourseCard from './courseCard';

// // // // // const courses = [
// // // // //   { title: "MERN Stack", description: "Full-stack development with MongoDB, Express, React, Node" },
// // // // //   { title: "Java", description: "Core Java and Advanced Java programming" },
// // // // //   { title: "Python", description: "Python programming for data science and automation" },
// // // // //   { title: "Testing", description: "Manual & Automation Testing with tools like Selenium" }
// // // // // ];

// // // // // function CourseList({ onEnroll }) {
// // // // //   return (
// // // // //     <div className="course-list">
// // // // //       {courses.map((course, idx) => (
// // // // //         <CourseCard key={idx} course={course} onEnroll={onEnroll} />
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default CourseList;


// // // // import React from 'react';
// // // // import { useNavigate } from 'react-router-dom';

// // // // const courses = [
// // // //   { title: "MERN Stack", description: "Full-stack development with MongoDB, Express, React, Node" },
// // // //   { title: "Java", description: "Core Java and Advanced Java programming" },
// // // //   { title: "Python", description: "Python programming for data science and automation" },
// // // //   { title: "Testing", description: "Manual & Automation Testing with tools like Selenium" }
// // // // ];

// // // // function CourseList() {
// // // //   const navigate = useNavigate();

// // // //   const handleEnroll = (courseTitle) => {
// // // //     // Navigating to the course details page with course title in the URL
// // // //     navigate(`/course/${encodeURIComponent(courseTitle)}`);
// // // //   };

// // // //   return (
// // // //     <div className="course-list">
// // // //       {courses.map((course, idx) => (
// // // //         <div key={idx} className="course-card">
// // // //           <h3>{course.title}</h3>
// // // //           <p>{course.description}</p>
// // // //           <button onClick={() => handleEnroll(course.title)}>Enroll Now</button>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default CourseList;



// // // import React from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // // Sample courses, typically fetched from the backend
// // // const courses = [
// // //   { id: "1", title: "MERN Stack", description: "Full-stack development with MongoDB, Express, React, Node" },
// // //   { id: "2", title: "Java", description: "Core Java and Advanced Java programming" },
// // //   { id: "3", title: "Python", description: "Python programming for data science and automation" },
// // //   { id: "4", title: "Testing", description: "Manual & Automation Testing with tools like Selenium" }
// // // ];

// // // function CourseList() {
// // //   const navigate = useNavigate();

// // //   const handleEnroll = (courseId) => {
// // //     // Navigating to the course details page with course ID in the URL
// // //     navigate(`/course/${courseId}`);
// // //   };

// // //   return (
// // //     <div className="course-list">
// // //       {courses.map((course, idx) => (
// // //         <div key={course.id} className="course-card">
// // //           <h3>{course.title}</h3>
// // //           <p>{course.description}</p>
// // //           <button onClick={() => handleEnroll(course.id)}>Enroll Now</button>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // export default CourseList;


// // import React, { useEffect, useState } from 'react';
// // import api from '../../api/api';


// // function CourseList() {
// //   const [courses, setCourses] = useState([]);

// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         const res = await api.get('/courses');
// //         setCourses(res.data);
// //       } catch (err) {
// //         console.error('Failed to fetch courses', err);
// //       }
// //     };

// //     fetchCourses();
// //   }, []);

// //   return (
// //     <div className="course-list">
// //       <h2>Available Courses</h2>
// //       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
// //         {courses.map(course => (
// //           <div key={course._id} className="course-card" style={{ border: '1px solid gray', padding: '1rem' }}>
// //             <img src={`http://localhost:5000/uploads/${course.image}`} alt={course.title} width="200" />
// //             <h3>{course.title}</h3>
// //             <p>{course.description}</p>
// //           </div>

// //           // {courses.map(course => (
// //           //   <div key={course._id}>
// //           //     <h3>{course.title}</h3>
// //           //     <Link to={`/courses/${course._id}`}>View Details</Link>
// //           //   </div>
// //           // ))}
          
// //         ))}
       
// //       </div>
// //     </div>
// //   );
// // }

// // export default CourseList;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../../api/api';

// function CourseList() {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await api.get('/courses');
//         setCourses(res.data);
//       } catch (err) {
//         console.error('Failed to fetch courses', err);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>Available Courses</h2>
//       <div style={{ 
//         display: 'flex', 
//         flexWrap: 'wrap', 
//         gap: '1.5rem',
//         justifyContent: 'center'
//       }}>
//         {courses.map(course => (
//           <div 
//             key={course._id} 
//             style={{
//               border: '1px solid #ccc',
//               borderRadius: '8px',
//               padding: '1rem',
//               width: '280px',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//               textAlign: 'center'
//             }}
//           >
//             <img 
//               src={`http://localhost:5000/uploads/${course.image}`} 
//               alt={course.title} 
//               style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '4px' }} 
//             />
//             <h3>{course.title}</h3>
//             <p style={{ fontSize: '0.9rem', color: '#555' }}>{course.description}</p>
//             <Link 
//               to={`/courses/${course._id}`} 
//               style={{
//                 display: 'inline-block',
//                 marginTop: '0.5rem',
//                 padding: '0.5rem 1rem',
//                 backgroundColor: '#007bff',
//                 color: 'white',
//                 borderRadius: '4px',
//                 textDecoration: 'none'
//               }}
//             >
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CourseList;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get('/courses');
        setCourses(res.data);
      } catch (err) {
        console.error('Failed to fetch courses', err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Available Courses</h2>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '1.5rem',
        justifyContent: 'center'
      }}>
        {courses.map(course => (
          <div 
            key={course._id} 
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              width: '280px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}
          >
            <img 
              src={`http://localhost:5000/uploads/${course.image}`} 
              alt={course.title} 
              style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '4px' }} 
            />
            <h3>{course.title}</h3>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>{course.description}</p>
            <Link 
              to={`/coursePage2/${course._id}`} 
              style={{
                display: 'inline-block',
                marginTop: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none'
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;