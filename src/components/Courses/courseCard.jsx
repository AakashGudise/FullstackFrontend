import React from 'react';
import './courseCard.css';

function CourseCard({ course, onEnroll }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <button onClick={() => onEnroll(course)}>Enroll</button>
    </div>
  );
}

export default CourseCard;
