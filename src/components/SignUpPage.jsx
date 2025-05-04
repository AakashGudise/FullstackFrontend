
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import '../styles/SignUpPage.css';

const SignUpPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.role = role;

    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      const res = await api.post(endpoint, data);

      if (isLogin) {
        // ✅ On login: store user & redirect
        localStorage.setItem('user', JSON.stringify(res.data));
        alert(`Logged in as ${res.data.role}`);

        if (res.data.role === 'admin') navigate('/AdminDash');
        else navigate('/studentDash2');
      } else {
        // ✅ On registration: redirect to login view
        alert('Registered successfully! Please log in.');
        setIsLogin(true);
        // Or use navigate('/login') if you have a separate login page
      }
    } catch (err) {
      alert(err.response?.data?.error || 'Error occurred');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-left">
        <div className="text-box">
          <h1>Intro to Coding</h1>
          <p>
            See if coding is the challenge you’ve been looking for — this online course taught
            through videos and challenges will set you up for bootcamp success.
          </p>
        </div>
      </div>

      <div className="signup-right">
        <div className="form-box">
          <h2>{isLogin ? 'Login to your account' : 'Get started for free'}</h2>
          <form className="form2" onSubmit={handleSubmit}>
            {/* Student-specific signup fields */}
            {!isLogin && role === 'student' && (
              <>
                <div className="row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input name="firstName" type="text" placeholder="First Name" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input name="lastName" type="text" placeholder="Last Name" required />
                  </div>
                </div>

                <div className="row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input name="phone" type="tel" placeholder="Phone" required />
                  </div>
                  <div className="form-group">
                    <label>Zip Code</label>
                    <input name="zip" type="text" placeholder="Zip" required />
                  </div>
                </div>
              </>
            )}

            {/* Admin-specific signup field */}
            {!isLogin && role === 'admin' && (
              <div className="form-group">
                <label>Admin Name</label>
                <input name="adminName" type="text" placeholder="Admin Name" required />
              </div>
            )}

            {/* Common fields */}
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="Email" required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" placeholder="Password" required />
            </div>

            {/* Role selection */}
            {!isLogin && (
              <div className="form-group radio-row">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={role === 'student'}
                    onChange={() => setRole('student')}
                  />
                  Student
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={role === 'admin'}
                    onChange={() => setRole('admin')}
                  />
                  Admin
                </label>
              </div>
            )}

            <button type="submit" className="submit-btn">
              {isLogin ? 'LOGIN' : 'SIGN UP'}
            </button>

            <div className="form-links">
              {isLogin ? (
                <button type="button" onClick={() => setIsLogin(false)}>
                  New user? Sign Up
                </button>
              ) : (
                <button type="button" onClick={() => setIsLogin(true)}>
                  Already have an account? Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
