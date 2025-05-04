import React, { useEffect, useState } from 'react';
import api from '../../api/api';

function StudentPersonalDashboard() {
  const [courses, setCourses] = useState([]);
  const student = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const res = await api.get(`/enrollments/${student._id}`);
        setCourses(res.data);
      } catch (err) {
        console.error('Failed to fetch enrolled courses', err);
      }
    };

    if (student?.role === 'student') {
      fetchEnrolledCourses();
    }
  }, [student]);

  return (
    <div>
      <h2>My Enrolled Courses</h2>
      {courses.length === 0 ? (
        <p>You haven't enrolled in any courses yet.</p>
      ) : (
        <ul>
          {courses.map(course => (
            <li key={course._id}>
              <strong>{course.title}</strong> - {course.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentPersonalDashboard;
