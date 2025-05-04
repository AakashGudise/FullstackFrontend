
// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import api from '../../api/api';
// // import './courseData2.css';
// // import review from '../../images/review3.png';

// // const CoursePage2 = () => {
// //   const { id } = useParams();
// //   const [course, setCourse] = useState(null);
// //   const [activeTab, setActiveTab] = useState('overview');
// //   const [enrolled, setEnrolled] = useState(false);

// //   // ✅ Get user info from localStorage
// //   const user = JSON.parse(localStorage.getItem('user'));
// //   const isStudent = user?.role === 'student';
// //   const userId = user?._id;

// //   useEffect(() => {
// //     const fetchCourse = async () => {
// //       try {
// //         const res = await api.get(`/courses/${id}`);
// //         setCourse(res.data);
// //       } catch (err) {
// //         console.error('Error fetching course:', err);
// //       }
// //     };

// //     const checkEnrollment = async () => {
// //       try {
// //         if (isStudent && userId) {
// //           const res = await api.get(`/enrollments/student/${userId}`);
        
// //         // if (isStudent) {
// //         //   const res = await api.get(`/enrollments/student/${userId}`);
// //           const isEnrolled = res.data.some(enr => enr.courseId._id === id);
// //           setEnrolled(isEnrolled);
// //         }
// //       } catch (err) {
// //         console.error('Failed to check enrollment:', err);
// //       }
// //     };

// //     fetchCourse();
// //     checkEnrollment();
// //   }, [id, isStudent, userId]);

// //   const handleEnroll = async () => {
// //     if (!userId || !id) return alert("User or Course ID missing");

// //     try {
// //       const res = await api.post('/enrollments', {
// //         studentId: userId,
// //         courseId: id,
// //       });

// //       setEnrolled(true);
// //       alert("Enrolled successfully!");
// //     } catch (err) {
// //       console.error(err);
// //       alert(err.response?.data?.error || "Enrollment failed");
// //     }
// //   };

// //   const renderContent = () => {
// //     switch (activeTab) {
// //       case 'overview':
// //         return <div><h2>About this Course</h2><p>{course?.description}</p></div>;
// //       case 'curriculum':
// //         return (
// //           <div>
// //             <h2>Curriculum</h2>
// //             <ul>{course?.modules?.map((mod, idx) => <li key={idx}>{mod.name}</li>)}</ul>
// //           </div>
// //         );
// //       case 'instructor':
// //         return (
// //           <div>
// //             <h2>Instructor</h2>
// //             <p>John Doe, Lead Data Scientist at Intellentx. 10+ years of experience in AI and ML.</p>
// //           </div>
// //         );
// //       case 'faqs':
// //         return (
// //           <div>
// //             <h2>FAQs</h2>
// //             <p><strong>Q:</strong> What is the course duration?<br /><strong>A:</strong> 6 months</p>
// //             <p><strong>Q:</strong> Do I get a certificate?<br /><strong>A:</strong> Yes, upon completion.</p>
// //           </div>
// //         );
// //       default:
// //         return null;
// //     }
// //   };

// //   if (!course) return <p>Loading...</p>;

// //   return (
// //     <div className="course-container">
// //       <div className="course-header">
// //         <div className="instructor-info">
// //           <img src={review} alt="Instructor" />
// //           <div>
// //             <p>Instructor: John Doe</p>
// //             <p>Experience: 10+ years</p>
// //           </div>
// //         </div>
// //         <h1>{course.title}</h1>
// //         <p>{course.subtitle || 'Master the full stack of data science with Python, ML, DL, and Data Engineering'}</p>

// //         <div className="course-meta">
// //           <div className="meta-left">
// //             <span>Duration: 6 months</span>
// //             <span>Level: Intermediate to Advanced</span>
// //           </div>

// //           {isStudent && (
// //             <button
// //               className="enroll-button black"
// //               onClick={handleEnroll}
// //               disabled={enrolled}
// //             >
// //               {enrolled ? 'Enrolled' : 'Enroll Now'}
// //             </button>
// //           )}
// //         </div>
// //       </div>

// //       <div className="course-tabs">
// //         <div className="tab-buttons">
// //           {['overview', 'curriculum', 'instructor', 'faqs'].map(tab => (
// //             <button
// //               key={tab}
// //               onClick={() => setActiveTab(tab)}
// //               className={activeTab === tab ? 'active' : ''}
// //             >
// //               {tab.charAt(0).toUpperCase() + tab.slice(1)}
// //             </button>
// //           ))}
// //         </div>
// //         <div className="course-content">{renderContent()}</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CoursePage2;


// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import api from '../../api/api';
// // import './courseData2.css';
// // import review from '../../images/review3.png';

// // const CoursePage2 = () => {
// //   const { id } = useParams();
// //   const [course, setCourse] = useState(null);
// //   const [activeTab, setActiveTab] = useState('overview');
// //   const [enrolled, setEnrolled] = useState(false);

// //   // ✅ Safe user extraction from localStorage
// //   const user = JSON.parse(localStorage.getItem('user') || '{}');
// //   const userId = user?._id;
// //   const isStudent = user?.role === 'student';

  

// //   useEffect(() => {
// //     const fetchCourse = async () => {
// //       try {
// //         const res = await api.get(`/courses/${id}`);
// //         setCourse(res.data);
// //       } catch (err) {
// //         console.error('Error fetching course:', err);
// //       }
// //     };

// //     const checkEnrollment = async () => {
// //       try {
// //         if (isStudent && userId) {
// //           const res = await api.get(`/enrollments/student/${userId}`);
// //           const isEnrolled = res.data.some(enr => enr.courseId._id === id);
// //           setEnrolled(isEnrolled);
// //         }
// //       } catch (err) {
// //         console.error('Failed to check enrollment:', err);
// //       }
// //     };

// //     if (id) {
// //       fetchCourse();
// //       checkEnrollment();
// //     }
// //   }, [id, isStudent, userId]);

// //   const handleEnroll = async () => {
// //     console.log("Enroll Clicked - userId:", userId, "courseId:", id);
// //     if (!userId || !id) {
// //       alert("User or Course ID missing");
// //       return;
// //     }

// //     try {
// //       const res = await api.post('/enrollments', {
// //         studentId: userId,
// //         courseId: id,
// //       });

// //       setEnrolled(true);
// //       alert("Enrolled successfully!");
// //     } catch (err) {
// //       console.error(err);
// //       alert(err.response?.data?.error || "Enrollment failed");
// //     }
// //   };

// //   const renderContent = () => {
// //     switch (activeTab) {
// //       case 'overview':
// //         return <div><h2>About this Course</h2><p>{course?.description}</p></div>;
// //       case 'curriculum':
// //         return (
// //           <div>
// //             <h2>Curriculum</h2>
// //             <ul>{course?.modules?.map((mod, idx) => <li key={idx}>{mod.name}</li>)}</ul>
// //           </div>
// //         );
// //       case 'instructor':
// //         return (
// //           <div>
// //             <h2>Instructor</h2>
// //             <p>John Doe, Lead Data Scientist at Intellentx. 10+ years of experience in AI and ML.</p>
// //           </div>
// //         );
// //       case 'faqs':
// //         return (
// //           <div>
// //             <h2>FAQs</h2>
// //             <p><strong>Q:</strong> What is the course duration?<br /><strong>A:</strong> 6 months</p>
// //             <p><strong>Q:</strong> Do I get a certificate?<br /><strong>A:</strong> Yes, upon completion.</p>
// //           </div>
// //         );
// //       default:
// //         return null;
// //     }
// //   };

// //   if (!course) return <p>Loading...</p>;

// //   return (
// //     <div className="course-container">
// //       <div className="course-header">
// //         <div className="instructor-info">
// //           <img src={review} alt="Instructor" />
// //           <div>
// //             <p>Instructor: John Doe</p>
// //             <p>Experience: 10+ years</p>
// //           </div>
// //         </div>
// //         <h1>{course.title}</h1>
// //         <p>{course.subtitle || 'Master the full stack of data science with Python, ML, DL, and Data Engineering'}</p>

// //         <div className="course-meta">
// //           <div className="meta-left">
// //             <span>Duration: 6 months</span>
// //             <span>Level: Intermediate to Advanced</span>
// //           </div>

// //           {isStudent && (
// //             <button
// //               className="enroll-button black"
// //               onClick={handleEnroll}
// //               disabled={enrolled}
// //             >
// //               {enrolled ? 'Enrolled' : 'Enroll Now'}
// //             </button>
// //           )}
// //         </div>
// //       </div>

// //       <div className="course-tabs">
// //         <div className="tab-buttons">
// //           {['overview', 'curriculum', 'instructor', 'faqs'].map(tab => (
// //             <button
// //               key={tab}
// //               onClick={() => setActiveTab(tab)}
// //               className={activeTab === tab ? 'active' : ''}
// //             >
// //               {tab.charAt(0).toUpperCase() + tab.slice(1)}
// //             </button>
// //           ))}
// //         </div>
// //         <div className="course-content">{renderContent()}</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CoursePage2;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../../api/api';
// import './courseData2.css';
// import review from '../../images/review3.png';

// const CoursePage2 = () => {
//   const { id } = useParams(); // Get course ID from URL params
//   const [course, setCourse] = useState(null);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [enrolled, setEnrolled] = useState(false);

//   // ✅ Get user info from localStorage and safely access it
//   const storedUser = localStorage.getItem('user');
//   const user = storedUser ? JSON.parse(storedUser) : null;
//   const userId = user?._id;  // Safely access user ID

//   console.log("Stored user:", user); // Log user to check if it's fetched correctly
//   console.log("Extracted userId:", userId); // Log userId to check if it's correct

//   const isStudent = user?.role === 'student';

//   useEffect(() => {
//     // Fetch course data
//     const fetchCourse = async () => {
//       try {
//         const res = await api.get(`/courses/${id}`);
//         setCourse(res.data);
//       } catch (err) {
//         console.error('Error fetching course:', err);
//       }
//     };

//     // Check if user is enrolled in the course
//     const checkEnrollment = async () => {
//       try {
//         if (isStudent && userId) {
//           const res = await api.get(`/enrollments/student/${userId}`);
//           const isEnrolled = res.data.some((enr) => enr.courseId._id === id);
//           setEnrolled(isEnrolled);
//         }
//       } catch (err) {
//         console.error('Failed to check enrollment:', err);
//       }
//     };

//     if (userId) {
//       fetchCourse();
//       checkEnrollment();
//     }
//   }, [id, isStudent, userId]);

//   // Handle enrollment action
//   const handleEnroll = async () => {
//     if (!userId || !id) {
//       alert("User or Course ID missing");
//       return;
//     }

//     try {
//       const res = await api.post('/enrollments', {
//         studentId: userId,
//         courseId: id,
//       });

//       setEnrolled(true);
//       alert("Enrolled successfully!");
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.error || "Enrollment failed");
//     }
//   };

//   // Render course content based on active tab
//   const renderContent = () => {
//     switch (activeTab) {
//       case 'overview':
//         return (
//           <div>
//             <h2>About this Course</h2>
//             <p>{course?.description}</p>
//           </div>
//         );
//       case 'curriculum':
//         return (
//           <div>
//             <h2>Curriculum</h2>
//             <ul>{course?.modules?.map((mod, idx) => <li key={idx}>{mod.name}</li>)}</ul>
//           </div>
//         );
//       case 'instructor':
//         return (
//           <div>
//             <h2>Instructor</h2>
//             <p>John Doe, Lead Data Scientist at Intellentx. 10+ years of experience in AI and ML.</p>
//           </div>
//         );
//       case 'faqs':
//         return (
//           <div>
//             <h2>FAQs</h2>
//             <p><strong>Q:</strong> What is the course duration?<br /><strong>A:</strong> 6 months</p>
//             <p><strong>Q:</strong> Do I get a certificate?<br /><strong>A:</strong> Yes, upon completion.</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   if (!course) return <p>Loading...</p>;

//   return (
//     <div className="course-container">
//       <div className="course-header">
//         <div className="instructor-info">
//           <img src={review} alt="Instructor" />
//           <div>
//             <p>Instructor: John Doe</p>
//             <p>Experience: 10+ years</p>
//           </div>
//         </div>
//         <h1>{course.title}</h1>
//         <p>{course.subtitle || 'Master the full stack of data science with Python, ML, DL, and Data Engineering'}</p>

//         <div className="course-meta">
//           <div className="meta-left">
//             <span>Duration: 6 months</span>
//             <span>Level: Intermediate to Advanced</span>
//           </div>

//           {isStudent && (
//             <button
//               className="enroll-button black"
//               onClick={handleEnroll}
//               disabled={enrolled}
//             >
//               {enrolled ? 'Enrolled' : 'Enroll Now'}
//             </button>
//           )}
//         </div>
//       </div>

//       <div className="course-tabs">
//         <div className="tab-buttons">
//           {['overview', 'curriculum', 'instructor', 'faqs'].map(tab => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={activeTab === tab ? 'active' : ''}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>
//         <div className="course-content">{renderContent()}</div>
//       </div>
//     </div>
//   );
// };

// export default CoursePage2;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import './courseData2.css';
import review from '../../Assets/review3.png';

const CoursePage2 = () => {
  const { id } = useParams(); // courseId from URL
  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [enrolled, setEnrolled] = useState(false);

  // ✅ Get user info from localStorage
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const userId = user?.id || user?._id; // ✅ FIXED: handles both 'id' and '_id'
  const isStudent = user?.role === 'student';

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/courses/${id}`);
        setCourse(res.data);
      } catch (err) {
        console.error('Error fetching course:', err);
      }
    };

    const checkEnrollment = async () => {
      try {
        if (isStudent && userId) {
          const res = await api.get(`/enrollments/student/${userId}`);
          const isEnrolled = res.data.some(enr => enr.courseId._id === id);
          setEnrolled(isEnrolled);
        }
      } catch (err) {
        console.error('Failed to check enrollment:', err);
      }
    };

    fetchCourse();
    checkEnrollment();
  }, [id, isStudent, userId]);

  const handleEnroll = async () => {
    console.log('Enroll Clicked - userId:', userId, 'courseId:', id);

    if (!userId || !id) {
      alert("User or Course ID missing");
      return;
    }

    try {
      const res = await api.post('/enrollments', {
        studentId: userId,
        courseId: id,
      });

      setEnrolled(true);
      alert("Enrolled successfully!");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Enrollment failed");
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <div><h2>About this Course</h2><p>{course?.description}</p></div>;
      case 'curriculum':
        return (
          <div>
            <h2>Curriculum</h2>
            <ul>{course?.modules?.map((mod, idx) => <li key={idx}>{mod.name}</li>)}</ul>
          </div>
        );
      case 'instructor':
        return (
          <div>
            <h2>Instructor</h2>
            <p>John Doe, Lead Data Scientist at Intellentx. 10+ years of experience in AI and ML.</p>
          </div>
        );
      case 'faqs':
        return (
          <div>
            <h2>FAQs</h2>
            <p><strong>Q:</strong> What is the course duration?<br /><strong>A:</strong> 6 months</p>
            <p><strong>Q:</strong> Do I get a certificate?<br /><strong>A:</strong> Yes, upon completion.</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div className="course-container">
      <div className="course-header">
        <div className="instructor-info">
          <img src={review} alt="Instructor" />
          <div>
            <p>Instructor: John Doe</p>
            <p>Experience: 10+ years</p>
          </div>
        </div>
        <h1>{course.title}</h1>
        <p>{course.subtitle || 'Master the full stack of data science with Python, ML, DL, and Data Engineering'}</p>

        <div className="course-meta">
          <div className="meta-left">
            <span>Duration: 6 months</span>
            <span>Level: Intermediate to Advanced</span>
          </div>

          {isStudent && (
            <button
              className="enroll-button black"
              onClick={handleEnroll}
              disabled={enrolled}
            >
              {enrolled ? 'Enrolled' : 'Enroll Now'}
            </button>
          )}
        </div>
      </div>

      <div className="course-tabs">
        <div className="tab-buttons">
          {['overview', 'curriculum', 'instructor', 'faqs'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? 'active' : ''}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="course-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default CoursePage2;
