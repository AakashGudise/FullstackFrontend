

// import React, { useEffect, useState } from 'react';
// import api from '../../api/api';
// import '../Courses/courseData2.css'; // Reuse course details styling
// import Quiz from "../admin/Quiz"

// const StudentDashboard = () => {
//   const [user, setUser] = useState(null);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [activeTab, setActiveTab] = useState('account');

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       try {
//         const parsedUser = JSON.parse(storedUser);
//         setUser(parsedUser);

//         const userId = parsedUser._id || parsedUser.id;
//         if (parsedUser.role === 'student' && userId) {
//           fetchEnrolledCourses(userId);
//         }
//       } catch (e) {
//         console.error('Failed to parse user:', e);
//       }
//     }
//   }, []);

//   const fetchEnrolledCourses = async (userId) => {
//     try {
//       const res = await api.get(`/enrollments/student/${userId}`);
//       setEnrolledCourses(res.data);
//     } catch (err) {
//       console.error('Error fetching enrolled courses:', err);
//     }
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'account':
//         return (
//           <div>
//             <h2>Account Details</h2>
//             <p><strong>Name:</strong> {user?.firstName} {user?.lastName}</p>
//             <p><strong>Email:</strong> {user?.email}</p>
//             <p><strong>Role:</strong> {user?.role}</p>
//           </div>
//         );
//       case 'quizzes':
//         return (
//           <div>
//             <Quiz></Quiz>
//             {/* <h2>Your Quizzes</h2>
//             <p>Quizzes will be displayed here. (Placeholder)</p> */}
//           </div>
//         );
//       case 'courses':
//         return (
//           <div>
//             <h2>Enrolled Courses</h2>
//             {enrolledCourses.length === 0 ? (
//               <p>No courses enrolled yet.</p>
//             ) : (
//               <ul className="course-list">
//                 {enrolledCourses.map((enroll) => (
//                   <li key={enroll._id} className="course-item">
//                     <strong>{enroll.courseId?.title}</strong><br />
//                     <span>{enroll.courseId?.subtitle}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         );
//       case 'faqs':
//         return (
//           <div>
//             <h2>FAQs</h2>
//             <p><strong>Q:</strong> How do I enroll in a course?<br /><strong>A:</strong> Visit the course page and click "Enroll Now".</p>
//             <p><strong>Q:</strong> Can I access quizzes anytime?<br /><strong>A:</strong> Yes, if they are enabled by the instructor.</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div className="course-container">
//       <div className="course-header">
//         <div className="instructor-info">
//           <img src="/assets/profile-placeholder.png" alt="Profile" />
//           <div>
//             <p>Student: {user?.firstName} {user?.lastName}</p>
//             <p>Email: {user?.email}</p>
//           </div>
//         </div>
//         <h1>Student Dashboard</h1>
//         <p>Welcome to your personalized dashboard</p>

//         <div className="course-meta">
//           <div className="meta-left">
//             <span>Role: {user?.role}</span>
//           </div>
//         </div>
//       </div>

//       <div className="course-tabs">
//         <div className="tab-buttons">
//           {[
//             { key: 'account', label: 'Account Details' },
//             { key: 'quizzes', label: 'Quizzes' },
//             { key: 'courses', label: 'Enrolled Courses' },
//             { key: 'faqs', label: 'FAQs' }
//           ].map(tab => (
//             <button
//               key={tab.key}
//               onClick={() => setActiveTab(tab.key)}
//               className={activeTab === tab.key ? 'active' : ''}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>
//         <div className="course-content">{renderContent()}</div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;


// import React, { useEffect, useState } from 'react';
// import api from '../../api/api';
// import '../Courses/courseData2.css'; // Reuse course details styling
// import Quiz from "../admin/Quiz"

// const StudentDashboard = () => {
//   const [user, setUser] = useState(null);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [activeTab, setActiveTab] = useState('account');
//   const navigate = useNavigate();


//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       try {
//         const parsedUser = JSON.parse(storedUser);
//         setUser(parsedUser);

//         const userId = parsedUser._id || parsedUser.id;
//         if (parsedUser.role === 'student' && userId) {
//           fetchEnrolledCourses(userId);
//         }
//       } catch (e) {
//         console.error('Failed to parse user:', e);
//       }
//     }
//   }, []);

//   const fetchEnrolledCourses = async (userId) => {
//     try {
//       const res = await api.get(`/enrollments/student/${userId}`);
//       setEnrolledCourses(res.data);
//     } catch (err) {
//       console.error('Error fetching enrolled courses:', err);
//     }
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'account':
//         return (
//           <div>
//             <h2>Account Details</h2>
//             <p><strong>Name:</strong> {user?.firstName} {user?.lastName}</p>
//             <p><strong>Email:</strong> {user?.email}</p>
//             <p><strong>Role:</strong> {user?.role}</p>
//           </div>
//         );
//       case 'quizzes':
//         return (
//           <div>
//             <Quiz></Quiz>
//             {/* <h2>Your Quizzes</h2>
//             <p>Quizzes will be displayed here. (Placeholder)</p> */}
//           </div>
//         );
//       case 'courses':
//         return (
//           <div>
//             <h2>Enrolled Courses</h2>
//             {enrolledCourses.length === 0 ? (
//               <p>No courses enrolled yet.</p>
//             ) : (
//               <ul className="course-list">
//                 {enrolledCourses.map((enroll) => (
//                   <li key={enroll._id} className="course-item">
//                     <strong>{enroll.courseId?.title}</strong><br />
//                     <span>{enroll.courseId?.subtitle}</span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         );
//       case 'faqs':
//         return (
//           <div>
//             <h2>FAQs</h2>
//             <p><strong>Q:</strong> How do I enroll in a course?<br /><strong>A:</strong> Visit the course page and click "Enroll Now".</p>
//             <p><strong>Q:</strong> Can I access quizzes anytime?<br /><strong>A:</strong> Yes, if they are enabled by the instructor.</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div className="course-container">
//       <div className="course-header">
//         <div className="instructor-info">
//           <img src="/assets/profile-placeholder.png" alt="Profile" />
//           <div>
//             <p>Student: {user?.firstName} {user?.lastName}</p>
//             <p>Email: {user?.email}</p>
//           </div>
//         </div>
//         <h1>Student Dashboard</h1>
//         <p>Welcome to your personalized dashboard</p>

//         <div className="course-meta">
//           <div className="meta-left">
//             <span>Role: {user?.role}</span>
//           </div>
//         </div>
//       </div>

//       <div className="course-tabs">
//         <div className="tab-buttons">
//           {[
//             { key: 'account', label: 'Account Details' },
//             { key: 'quizzes', label: 'Quizzes' },
//             { key: 'courses', label: 'Enrolled Courses' },
//             { key: 'faqs', label: 'FAQs' }
//           ].map(tab => (
//             <button
//               key={tab.key}
//               onClick={() => setActiveTab(tab.key)}
//               className={activeTab === tab.key ? 'active' : ''}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>
//         <div className="course-content">{renderContent()}</div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard; 


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import '../Courses/courseData2.css'; // Reuse course details styling
import Quiz from "../admin/Quiz";

const StudentDashboard = () => {
  const [user, setUser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [activeTab, setActiveTab] = useState('account');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);

        const userId = parsedUser._id || parsedUser.id;
        if (parsedUser.role === 'student' && userId) {
          fetchEnrolledCourses(userId);
        }
      } catch (e) {
        console.error('Failed to parse user:', e);
      }
    }
  }, []);

  const fetchEnrolledCourses = async (userId) => {
    try {
      const res = await api.get(`/enrollments/student/${userId}`);
      setEnrolledCourses(res.data);
    } catch (err) {
      console.error('Error fetching enrolled courses:', err);
    }
  };

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div>
            <h2>Account Details</h2>
            <p><strong>Name:</strong> {user?.firstName} {user?.lastName}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Role:</strong> {user?.role}</p>
          </div>
        );

      case 'quizzes':
        return (
          <div>
            <Quiz />
          </div>
        );

      case 'courses':
        return (
          <div>
            <h2>Enrolled Courses</h2>
            {enrolledCourses.length === 0 ? (
              <p>No courses enrolled yet.</p>
            ) : (
              <ul className="course-list">
                {enrolledCourses.map((enroll) => (
                  <li
                    key={enroll._id}
                    className="course-item"
                    onClick={() => handleCourseClick(enroll.courseId?._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <strong>{enroll.courseId?.title}</strong><br />
                    <span>{enroll.courseId?.subtitle}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );

      case 'faqs':
        return (
          <div>
            <h2>FAQs</h2>
            <p><strong>Q:</strong> How do I enroll in a course?<br /><strong>A:</strong> Visit the course page and click "Enroll Now".</p>
            <p><strong>Q:</strong> Can I access quizzes anytime?<br /><strong>A:</strong> Yes, if they are enabled by the instructor.</p>
          </div>
        );

      default:
        return null;
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="course-container">
      <div className="course-header">
        <div className="instructor-info">
          <img src="/assets/profile-placeholder.png" alt="Profile" />
          <div>
            <p>Student: {user?.firstName} {user?.lastName}</p>
            <p>Email: {user?.email}</p>
          </div>
        </div>
        <h1>Student Dashboard</h1>
        <p>Welcome to your personalized dashboard</p>

        <div className="course-meta">
          <div className="meta-left">
            <span>Role: {user?.role}</span>
          </div>
        </div>
      </div>

      <div className="course-tabs">
        <div className="tab-buttons">
          {[
            { key: 'account', label: 'Account Details' },
            { key: 'quizzes', label: 'Quizzes' },
            { key: 'courses', label: 'Enrolled Courses' },
            { key: 'faqs', label: 'FAQs' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={activeTab === tab.key ? 'active' : ''}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="course-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default StudentDashboard;
