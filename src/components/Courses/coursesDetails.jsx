

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [userId, setUserId] = useState(null); // From login cookie/localStorage
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/courses/${id}`);
        setCourse(res.data);
      } catch (err) {
        console.error('Error fetching course:', err);
      }
    };

    const student = JSON.parse(localStorage.getItem('user'));
    if (student) setUserId(student._id);

    fetchCourse();
  }, [id]);

  const handleEnroll = async () => {
    try {
      await api.post('/enrollments', { studentId: userId, courseId: id });
      alert('Enrolled successfully!');
      setEnrolled(true);
    } catch (err) {
      alert(err.response?.data?.error || 'Enrollment failed');
    }
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: '700px', margin: 'auto' }}>
      <h2>{course.title}</h2>
      <img src={`https://fullstackbackend-1-9nc2.onrender.com/uploads/${course.image}`} alt={course.title} style={{ width: '100%' }} />
      <p>{course.description}</p>
      <ul>
        {course.modules?.map((mod, index) => (
          <li key={index}><strong>{mod.title}</strong>: {mod.description}</li>
        ))}
      </ul>

      {userId && (
        <button onClick={handleEnroll} disabled={enrolled}>
          {enrolled ? 'Already Enrolled' : 'Enroll Now'}
        </button>
      )}
    </div>
  );
}

export default CourseDetails;
