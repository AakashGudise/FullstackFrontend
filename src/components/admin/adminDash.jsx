import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import '../Courses/courseData2.css'; 
import CourseForm from '../Courses/courseForm';
import QuestionManager from './QuestionManager';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('account');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (e) {
        console.error('Failed to parse user:', e);
      }
    }
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div>
            <h2>Account Details</h2>
            {/* <p><strong>Name:</strong> {user?.name} {user?.name}</p> */}
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Role:</strong> {user?.role}</p>
          </div>
        );
      case 'manage-courses':
        return (
          <div>
            <h2>Manage Courses</h2>
            <CourseForm></CourseForm>
          </div>
        );
      case 'manage-users':
        return (
          <div>
            <h2>Manage Quzz</h2>
            <QuestionManager></QuestionManager>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h2>Admin Settings</h2>
            <p>Settings and configurations will be displayed here.</p>
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
          <img src="/Assets/profile-placeholder.png" alt="Profile" />
          <div>
            {/* <p>Admin: {user?.firstName} {user?.lastName}</p> */}
            <p>Email: {user?.email}</p>
          </div>
        </div>
        <h1>Admin Dashboard</h1>
        <p>Welcome, admin. Manage your platform below.</p>

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
            { key: 'manage-courses', label: 'Manage Courses' },
            { key: 'manage-users', label: 'Manage Quiz' },
            { key: 'settings', label: 'Settings' }
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

export default AdminDashboard;




// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../../api/api';
// import '../Courses/courseData2.css'; // Reuse course styles
// import CourseForm from '../Courses/courseForm';
// import QuestionManager from './QuestionManager';

// const AdminDashboard = () => {
//   const [admin, setAdmin] = useState(null);
//   const [activeTab, setActiveTab] = useState('account');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedAdmin = localStorage.getItem('admin');

//     if (!storedAdmin) {
//       // If no admin token, redirect to login
//       navigate('/login');
//       return;
//     }

//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       try {
//         const parsedUser = JSON.parse(storedUser);
//         if (parsedUser.role === 'admin') {
//           setAdmin(parsedUser);
//         } else {
//           navigate('/login'); // Not an admin, redirect
//         }
//       } catch (e) {
//         console.error('Failed to parse admin user:', e);
//         navigate('/login');
//       }
//     } else {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'account':
//         return (
//           <div>
//             <h2>Account Details</h2>
//             <p><strong>Email:</strong> {admin?.email}</p>
//             <p><strong>Role:</strong> {admin?.role}</p>
//           </div>
//         );
//       case 'manage-courses':
//         return (
//           <div>
//             <h2>Manage Courses</h2>
//             <CourseForm />
//           </div>
//         );
//       case 'manage-quiz':
//         return (
//           <div>
//             <h2>Manage Quiz</h2>
//             <QuestionManager />
//           </div>
//         );
//       case 'settings':
//         return (
//           <div>
//             <h2>Admin Settings</h2>
//             <p>Settings and configurations will be displayed here.</p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   if (!admin) return <p>Loading Admin Dashboard...</p>;

//   return (
//     <div className="course-container">
//       <div className="course-header">
//         <div className="instructor-info">
//           <img src="/assets/profile-placeholder.png" alt="Admin Profile" />
//           <div>
//             <p>Admin</p>
//             <p>Email: {admin?.email}</p>
//           </div>
//         </div>
//         <h1>Admin Dashboard</h1>
//         <p>Welcome, admin. Manage your platform below.</p>

//         <div className="course-meta">
//           <div className="meta-left">
//             <span>Role: {admin?.role}</span>
//           </div>
//         </div>
//       </div>

//       <div className="course-tabs">
//         <div className="tab-buttons">
//           {[
//             { key: 'account', label: 'Account Details' },
//             { key: 'manage-courses', label: 'Manage Courses' },
//             { key: 'manage-quiz', label: 'Manage Quiz' },
//             { key: 'settings', label: 'Settings' }
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

// export default AdminDashboard;

