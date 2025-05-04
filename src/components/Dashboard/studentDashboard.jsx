// // import React, { useState } from 'react';
// // import CourseList from '../Courses/courseList';
// // import './studentDashboard.css';

// // function StudentDashboard() {
// //   const [student] = useState({ name: 'John Doe', email: 'john@example.com', mobile: '1234567890' });
// //   const [enrolledCourses, setEnrolledCourses] = useState([]);

// //   const handleEnroll = (course) => {
// //     if (!enrolledCourses.some(c => c.title === course.title)) {
// //       setEnrolledCourses([...enrolledCourses, course]);
// //     }
// //   };

// //   return (
// //     <div className="dashboard">
// //       <div className="student-info">
// //         <h2>Welcome, {student.name}</h2>
// //         <p>Email: {student.email}</p>
// //         <p>Mobile: {student.mobile}</p>
// //         <p><strong>{enrolledCourses.length} Course(s) Enrolled</strong></p>
// //       </div>

// //       <CourseList onEnroll={handleEnroll} />

// //       <div className="enrolled-courses">
// //         <h3>Enrolled Courses</h3>
// //         <ul>
// //           {enrolledCourses.map((course, idx) => (
// //             <li key={idx}>{course.title}</li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }

// // export default StudentDashboard;


// import React, { useState, useEffect } from 'react';
// import api from '../../api/api';

// function StudentDashboard() {
//   const [enrolledCourses, setEnrolledCourses] = useState([]);

//   useEffect(() => {
//     // Fetch the enrolled courses
//     const fetchEnrolledCourses = async () => {
//       try {
//         const response = await api.get('/api/enrolled-courses');
//         setEnrolledCourses(response.data);
//       } catch (error) {
//         console.error('Error fetching enrolled courses:', error);
//       }
//     };

//     fetchEnrolledCourses();
//   }, []);

//   return (
//     <div>
//       <h2>Student Dashboard</h2>
//       <h3>You are enrolled in {enrolledCourses.length} courses</h3>
//       <ul>
//         {enrolledCourses.map((course) => (
//           <li key={course.courseId._id}>
//             <h4>{course.courseId.title}</h4>
//             <p>{course.courseId.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default StudentDashboard;


import React, { useState, useEffect } from 'react';
import api from '../../api/api';  // Assuming you have set up axios or API helper

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchEnrolledCourses = async () => {
  //     try {
  //       const res = await api.get('/student/courses', { withCredentials: true });
  //       setEnrolledCourses(res.data); // Assuming data contains an array of courses
  //     } catch (err) {
  //       console.error('Error fetching enrolled courses:', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchEnrolledCourses();
  // }, []);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await api.get('/auth/user'); // Make sure this matches your backend route
        setUserData(res.data);
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };
  
    fetchUserData();
  }, []);
  

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Your Enrolled Courses</h2>
      {enrolledCourses.length > 0 ? (
        <ul>
          {enrolledCourses.map((course) => (
            <li key={course._id}>{course.title}</li> // Replace 'title' with actual course properties
          ))}
        </ul>
      ) : (
        <p>You are not enrolled in any courses.</p>
      )}
    </div>
  );
};

export default StudentDashboard;
