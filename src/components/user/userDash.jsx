


// export function UserDash(){
//     return(
//         <>
//          <h1>User Dash</h1>
//         </>
//     )
// }

import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';


export function UserDash() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  



  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get('/auth/me'); // 👈 sends cookie automatically
        if (res.data.role !== 'student') {
          navigate('/');
        }
        setLoading(false);
      } catch (err) {
        alert(err.response?.data?.error || 'Please login first');
        navigate('/');
      }
    };
  
    checkAuth();
  }, [navigate]);



//   useEffect(() => {
//     const verifyToken = async () => {
//       try {
//         const res = await api.get('/auth/me');
//         if (res.data.role !== 'student') {
//           alert('Access denied');
//           window.location.href = '/';
//         } else {
//           setUser(res.data);
//         }
//       } catch (err) {
//         alert('Please login first');
//         window.location.href = '/';
//       } finally {
//         setLoading(false);
//       }
//     };

//     verifyToken();
//   }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1>User Dashboard</h1>
      <p>Welcome, user ID: {user.id}</p>
      <button onClick={() => {
        document.cookie = 'token';
        window.location.href = '/';
      }}>Logout</button>
    </>
  );
}
