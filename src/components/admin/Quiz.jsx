// import React, { useState, useEffect } from 'react';
// import api from '../../api/api';

// function Quiz() {
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     api.get('/questions').then((res) => setQuestions(res.data.slice(0, 10))); // Show only 10
//   }, []);

//   const handleSubmit = () => {
//     setSubmitted(true);
//   };

//   return (
//     <div>
//       <h2>Quiz</h2>
//       {questions.map((q, i) => (
//         <div key={q._id}>
//           <p>{i + 1}. {q.questionText}</p>
//           {q.options.map((opt, idx) => (
//             <label key={idx}>
//               <input
//                 type="radio"
//                 name={q._id}
//                 value={idx}
//                 onChange={() => setAnswers({ ...answers, [q._id]: idx })}
//               />
//               {opt.text}
//             </label>
//           ))}
//         </div>
//       ))}

//       <button onClick={handleSubmit}>Submit</button>

//       {submitted && (
//         <div>
//           <h3>Results</h3>
//           {questions.map((q) => {
//             const correct = q.options.findIndex(o => o.isCorrect);
//             const userAnswer = answers[q._id];
//             return (
//               <p key={q._id} style={{ color: userAnswer == correct ? 'green' : 'red' }}>
//                 Q: {q.questionText} <br />
//                 Your answer: {q.options[userAnswer]?.text || 'N/A'} <br />
//                 Correct: {q.options[correct].text}
//               </p>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Quiz;


// import React, { useState, useEffect } from 'react';
// import api from '../../api/api';

// function Quiz() {
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     api.get('/questions').then((res) => setQuestions(res.data.slice(0, 10))); // Load 10 questions
//   }, []);

//   const handleSubmit = () => {
//     let correctCount = 0;

//     questions.forEach((q) => {
//       const correctIndex = q.options.findIndex((opt) => opt.isCorrect);
//       if (answers[q._id] === correctIndex) {
//         correctCount += 1;
//       }
//     });

//     setScore(correctCount);
//     setSubmitted(true);
//   };

//   return (
//     <div style={{ padding: '1rem', maxWidth: '800px', margin: 'auto' }}>
//       <h2>HTML Quiz</h2>

//       {questions.map((q, i) => (
//         <div key={q._id} style={{ marginBottom: '1.5rem' }}>
//           <p><strong>{i + 1}. {q.questionText}</strong></p>
//           {q.options.map((opt, idx) => (
//             <label key={idx} style={{ display: 'block', marginLeft: '1rem' }}>
//               <input
//                 type="radio"
//                 name={q._id}
//                 value={idx}
//                 disabled={submitted}
//                 checked={answers[q._id] === idx}
//                 onChange={() => setAnswers({ ...answers, [q._id]: idx })}
//               />
//               {opt.text}
//             </label>
//           ))}
//         </div>
//       ))}

//       {!submitted && (
//         <button onClick={handleSubmit} style={{ padding: '0.5rem 1rem' }}>
//           Submit
//         </button>
//       )}

//       {submitted && (
//         <div style={{ marginTop: '2rem' }}>
//           <h3>Your Score: {score} / {questions.length}</h3>
//           <hr />
//           {questions.map((q) => {
//             const correctIndex = q.options.findIndex((o) => o.isCorrect);
//             const userAnswer = answers[q._id];
//             const isCorrect = userAnswer === correctIndex;

//             return (
//               <div key={q._id} style={{ marginBottom: '1rem' }}>
//                 <p style={{ color: isCorrect ? 'green' : 'red' }}>
//                   Q: {q.questionText} <br />
//                   Your Answer: {q.options[userAnswer]?.text || 'No Answer'} <br />
//                   Correct Answer: {q.options[correctIndex].text}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Quiz;


import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import './Quiz.css';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    api.get('/questions').then((res) => setQuestions(res.data.slice(0, 10)));
  }, []);

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      const correctIndex = q.options.findIndex((opt) => opt.isCorrect);
      if (answers[q._id] === correctIndex) {
        correctCount += 1;
      }
    });
    setScore(correctCount);
    setSubmitted(true);
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-heading">HTML Quiz</h2>

      {questions.map((q, i) => (
        <div key={q._id} className="question-block">
          <p className="question-text">
            {i + 1}. {q.questionText}
          </p>
          {q.options.map((opt, idx) => (
            <label key={idx} className="option-label">
              <input
                type="radio"
                name={q._id}
                value={idx}
                disabled={submitted}
                checked={answers[q._id] === idx}
                onChange={() => setAnswers({ ...answers, [q._id]: idx })}
                className="option-radio"
              />
              {opt.text}
            </label>
          ))}
        </div>
      ))}

      {!submitted && (
        <button onClick={handleSubmit} className="submit-button">
          Submit Quiz
        </button>
      )}

      {submitted && (
        <div className="result-block">
          <h3 className="score">Your Score: {score} / {questions.length}</h3>
          {questions.map((q) => {
            const correctIndex = q.options.findIndex((o) => o.isCorrect);
            const userAnswer = answers[q._id];
            const isCorrect = userAnswer === correctIndex;

            return (
              <div key={q._id} className="result-item">
                <p className={`result-text ${isCorrect ? 'result-correct' : 'result-wrong'}`}>
                  <strong>Q:</strong> {q.questionText}<br />
                  <strong>Your Answer:</strong> {q.options[userAnswer]?.text || 'No Answer'}<br />
                  <strong>Correct Answer:</strong> {q.options[correctIndex].text}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Quiz;




// // import React, { useEffect, useState } from 'react';
// // import api from '../../api/api'; // Adjust path as needed
// // import './Quiz.css'

// // const Quiz = () => {
// //   const [questions, setQuestions] = useState([]);
// //   const [answers, setAnswers] = useState({});
// //   const [score, setScore] = useState(null);

// //   useEffect(() => {
// //     const fetchQuestions = async () => {
// //       const res = await api.get('/api/questions');
// //       setQuestions(res.data);
// //     };
// //     fetchQuestions();
// //   }, []);

// //   const handleSelect = (qid, answer) => {
// //     setAnswers(prev => ({ ...prev, [qid]: answer }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     let count = 0;
// //     questions.forEach(q => {
// //       if (answers[q._id] === q.correctAnswer) {
// //         count += 1;
// //       }
// //     });
// //     setScore(count);
// //   };

// //   return (
// //     <div className="quiz-container">
// //       <h2>HTML Quiz</h2>
// //       <form onSubmit={handleSubmit}>
// //         {questions.map((q, index) => (
// //           <div key={q._id} className="question-block">
// //             <p>{index + 1}. {q.question}</p>
// //             {q.options.map(opt => (
// //               <label key={opt}>
// //                 <input
// //                   type="radio"
// //                   name={`question-${q._id}`}
// //                   value={opt}
// //                   checked={answers[q._id] === opt}
// //                   onChange={() => handleSelect(q._id, opt)}
// //                 />
// //                 {opt}
// //               </label>
// //             ))}
// //           </div>
// //         ))}
// //         <button type="submit">Submit</button>
// //       </form>
// //       {score !== null && (
// //         <div className="score">
// //           <h3>Your Score: {score} / {questions.length}</h3>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Quiz;
