

// import React, { useState, useEffect } from 'react';
// import api from '../../api/api';
// import './Quiz.css';

// function Quiz() {
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     api.get('/questions').then((res) => setQuestions(res.data.slice(0, 10)));
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
//     <div className="quiz-container">
//       <h2 className="quiz-heading">HTML Quiz</h2>

//       {questions.map((q, i) => (
//         <div key={q._id} className="question-block">
//           <p className="question-text">
//             {i + 1}. {q.questionText}
//           </p>
//           {q.options.map((opt, idx) => (
//             <label key={idx} className="option-label">
//               <input
//                 type="radio"
//                 name={q._id}
//                 value={idx}
//                 disabled={submitted}
//                 checked={answers[q._id] === idx}
//                 onChange={() => setAnswers({ ...answers, [q._id]: idx })}
//                 className="option-radio"
//               />
//               {opt.text}
//             </label>
//           ))}
//         </div>
//       ))}

//       {!submitted && (
//         <button onClick={handleSubmit} className="submit-button">
//           Submit Quiz
//         </button>
//       )}

//       {submitted && (
//         <div className="result-block">
//           <h3 className="score">Your Score: {score} / {questions.length}</h3>
//           {questions.map((q) => {
//             const correctIndex = q.options.findIndex((o) => o.isCorrect);
//             const userAnswer = answers[q._id];
//             const isCorrect = userAnswer === correctIndex;

//             return (
//               <div key={q._id} className="result-item">
//                 <p className={`result-text ${isCorrect ? 'result-correct' : 'result-wrong'}`}>
//                   <strong>Q:</strong> {q.questionText}<br />
//                   <strong>Your Answer:</strong> {q.options[userAnswer]?.text || 'No Answer'}<br />
//                   <strong>Correct Answer:</strong> {q.options[correctIndex].text}
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
import { useNavigate } from 'react-router-dom'; // For redirecting
import api from '../../api/api';
import './Quiz.css';

function Quiz() {
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      alert('Please log in to access the quiz.');
      navigate('/login');
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      api.get('/questions')
        .then((res) => setQuestions(res.data.slice(0, 10)))
        .catch((err) => console.error('Error fetching questions:', err));
    } catch (e) {
      console.error('Invalid user data in localStorage:', e);
      navigate('/signUp');
    }
  }, [navigate]);

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

  if (!user) return null; // Don't render if user check hasn't passed yet

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
