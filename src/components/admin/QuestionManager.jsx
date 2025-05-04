// import React, { useState, useEffect } from 'react';
// import api from '../../api/api';
// import "./QuestionManager.css"

// function QuestionManager() {
//   const [questions, setQuestions] = useState([]);
//   const [form, setForm] = useState({ questionText: '', options: ['', '', '', ''], correctIndex: 0 });

//   const fetchQuestions = async () => {
//     const res = await api.get('/questions');
//     setQuestions(res.data);
//   };

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       questionText: form.questionText,
//       options: form.options.map((text, i) => ({ text, isCorrect: i === Number(form.correctIndex) })),
//     };
//     await api.post('/questions', payload);
//     setForm({ questionText: '', options: ['', '', '', ''], correctIndex: 0 });
//     fetchQuestions();
//   };

//   const handleDelete = async (id) => {
//     await api.delete(`/questions/${id}`);
//     fetchQuestions();
//   };

//   return (
//     <div>
        
//   <div className="question-manager">
//     <h2>Create Question</h2>
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="Question"
//         value={form.questionText}
//         onChange={(e) => setForm({ ...form, questionText: e.target.value })}
//         required
//       />
//       {form.options.map((opt, i) => (
//         <input
//           key={i}
//           placeholder={`Option ${i + 1}`}
//           value={opt}
//           onChange={(e) => {
//             const newOptions = [...form.options];
//             newOptions[i] = e.target.value;
//             setForm({ ...form, options: newOptions });
//           }}
//           required
//         />
//       ))}
//       <select
//         value={form.correctIndex}
//         onChange={(e) => setForm({ ...form, correctIndex: e.target.value })}
//       >
//         {[0, 1, 2, 3].map((i) => (
//           <option key={i} value={i}>
//             Correct Option {i + 1}
//           </option>
//         ))}
//       </select>
//       <button type="submit">Add Question</button>
//     </form>

//     <h3>Questions</h3>
//     <ul>
//       {questions.map((q) => (
//         <li key={q._id}>
//           {q.questionText}
//           <button onClick={() => handleDelete(q._id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   </div>
//     </div>
//   );
// }

// export default QuestionManager;


import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import './QuestionManager.css';

function QuestionManager() {
  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState({ questionText: '', options: ['', '', '', ''], correctIndex: 0 });
  const [editingId, setEditingId] = useState(null);

  const fetchQuestions = async () => {
    const res = await api.get('/questions');
    setQuestions(res.data);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      questionText: form.questionText,
      options: form.options.map((text, i) => ({
        text,
        isCorrect: i === Number(form.correctIndex),
      })),
    };

    if (editingId) {
      await api.put(`/questions/${editingId}`, payload);
      setEditingId(null);
    } else {
      await api.post('/questions', payload);
    }

    setForm({ questionText: '', options: ['', '', '', ''], correctIndex: 0 });
    fetchQuestions();
  };

  const handleDelete = async (id) => {
    await api.delete(`/questions/${id}`);
    fetchQuestions();
  };

  const handleEdit = (q) => {
    const options = q.options.map((opt) => opt.text);
    const correctIndex = q.options.findIndex((opt) => opt.isCorrect);
    setForm({ questionText: q.questionText, options, correctIndex });
    setEditingId(q._id);
  };

  return (
    <div className="question-manager">
      <h2>{editingId ? 'Edit Question' : 'Create Question'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Question"
          value={form.questionText}
          onChange={(e) => setForm({ ...form, questionText: e.target.value })}
          required
        />
        {form.options.map((opt, i) => (
          <input
            key={i}
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={(e) => {
              const newOptions = [...form.options];
              newOptions[i] = e.target.value;
              setForm({ ...form, options: newOptions });
            }}
            required
          />
        ))}
        <select
          value={form.correctIndex}
          onChange={(e) => setForm({ ...form, correctIndex: e.target.value })}
        >
          {[0, 1, 2, 3].map((i) => (
            <option key={i} value={i}>
              Correct Option {i + 1}
            </option>
          ))}
        </select>
        <button type="submit">{editingId ? 'Update' : 'Add'} Question</button>
      </form>

      <h3>Questions</h3>
      <ul>
  {questions.map((q) => {
    const correctOption = q.options.find((opt) => opt.isCorrect);
    return (
      <li key={q._id}>
        <strong>{q.questionText}</strong>
        <p style={{ color: 'green' }}>Correct Answer: {correctOption?.text}</p>
        <div className="button-group">
          <button onClick={() => handleEdit(q)}>Edit</button>
          <button onClick={() => handleDelete(q._id)}>Delete</button>
        </div>
      </li>
    );
  })}
</ul>

      {/* <ul>
        {questions.map((q) => (
          <li key={q._id}>
            <strong>{q.questionText}</strong>
            <ul>
              {q.options.map((opt, i) => (
                <li
                  key={i}
                  style={{ color: opt.isCorrect ? 'green' : 'black' }}
                >
                  {i + 1}. {opt.text}
                </li>
              ))}
            </ul>
            <div className="button-group">
              <button onClick={() => handleEdit(q)}>Edit</button>
              <button onClick={() => handleDelete(q._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default QuestionManager;
