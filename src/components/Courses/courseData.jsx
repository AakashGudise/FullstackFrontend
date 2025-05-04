import React, { useState } from 'react';

const CoursePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="text-gray-700 text-base leading-relaxed space-y-4">
            <p>This comprehensive course is designed to equip learners with the theoretical knowledge and practical skills required to excel in data science, machine learning (ML), and deep learning...</p>
            <ul className="list-disc list-inside">
              <li>Clean, transform, and preprocess complex datasets for robust analysis.</li>
              <li>Build, evaluate, and optimize ML models...</li>
              <li>Design scalable data pipelines using PySpark...</li>
              <li>Apply NLP, time series forecasting...</li>
              <li>Automate workflows and integrate solutions...</li>
              <li>Showcase expertise through a capstone project...</li>
            </ul>
          </div>
        );
      case 'curriculum':
        return (
          <div className="text-gray-700 text-base leading-relaxed">
            <p><strong>Curriculum includes:</strong></p>
            <ul className="list-disc list-inside">
              <li>Week 1–2: Python for Data Science</li>
              <li>Week 3–4: Statistics, EDA, and Visualization</li>
              <li>Week 5–6: Machine Learning Models</li>
              <li>Week 7–8: Deep Learning with TensorFlow</li>
              <li>Week 9: Capstone Project Planning</li>
              <li>Week 10: Project Showcase & Feedback</li>
            </ul>
          </div>
        );
      case 'instructor':
        return (
          <div className="text-gray-700 text-base leading-relaxed">
            <p><strong>Instructor:</strong></p>
            <p>Admin</p>
            <p>Experienced Data Scientist with expertise in ML, AI, and cloud-based solutions. Passionate about teaching and industry applications.</p>
          </div>
        );
      case 'faqs':
        return (
          <div className="text-gray-700 text-base leading-relaxed">
            <p><strong>Frequently Asked Questions:</strong></p>
            <p><strong>Q:</strong> Do I need prior experience?</p>
            <p><strong>A:</strong> No prior experience is necessary. We cover fundamentals.</p>
            <p><strong>Q:</strong> Is there a certificate?</p>
            <p><strong>A:</strong> Yes, you will receive a certificate upon completion.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      {/* Header */}
      <div className="bg-teal-700 text-white p-8 rounded-t-xl">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Instructor"
            className="rounded-full w-12 h-12"
          />
          <div>
            <p className="font-medium">Instructor</p>
            <p className="text-sm">Admin</p>
          </div>
        </div>
        <h1 className="text-3xl font-bold mt-4">Full Stack Data Science Engineer</h1>
        <p className="mt-2 text-sm">Category: Data Science</p>
        <div className="flex space-x-6 text-sm mt-4">
          <p>📅 10 Weeks</p>
          <p>📊 All Levels</p>
          <p>📘 20 Lessons</p>
          <p>❌ 0 Quizzes</p>
          <p>👨‍🎓 2 Students</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white p-6 shadow-md rounded-b-xl">
        <div className="border-b flex space-x-6 mb-6">
          {['overview', 'curriculum', 'instructor', 'faqs'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 font-medium capitalize ${
                activeTab === tab
                  ? 'border-b-2 border-teal-600 text-teal-600'
                  : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default CoursePage;