// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import SignUpPage from "./components/SignUpPage"; // <- import the new page
import './App.css';
import { AdminDashboard } from './components/admin/adminDash';
import { UserDash } from './components/user/userDash';
import Quiz from './components/admin/Quiz';
import QuestionManager from './components/admin/QuestionManager';
import CourseCard from './components/Courses/courseCard';
import CourseList from './components/Courses/courseList';
import StudentDashboard from './components/Dashboard/studentDashboard';
import CourseDetails from './components/Courses/coursesDetails';
import Dashboard from './components/Dashboard/studentdash';
import CourseForm from './components/Courses/courseForm';
import CoursePage from './components/Courses/courseData';
import CoursePage2 from './components/Courses/courseData2';
import StudentDashboard2 from './components/Dashboard/studentdash';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/AdminDash" element={<AdminDashboard />} />
        <Route path="/UserDash" element={<UserDash />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/questionmanager" element={<QuestionManager />} />
        <Route path="/CourseCard" element={<CourseCard />} />
        <Route path="/CourseList" element={<CourseList />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/courseForm" element={<CourseForm />} />
<Route path="/coursePage" element={<CoursePage />} />
<Route path="/coursePage2/:id" element={<CoursePage2 />} />
<Route path="/StudentDash2" element={<StudentDashboard2 />} />
{/* <Route path="/dashboard" element={<Dashboard />} /> */}

        {/* <Route path="/UserDash" element={<UserDash />} /> */}

        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
