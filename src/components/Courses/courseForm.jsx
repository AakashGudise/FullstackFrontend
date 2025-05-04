
import React, { useState } from 'react';
import api from '../../api/api';
import'./courseForm.css'

function CourseForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [modules, setModules] = useState([{ name: '', description: '' }]);

  const handleModuleChange = (index, field, value) => {
    const updatedModules = [...modules];
    updatedModules[index][field] = value;
    setModules(updatedModules);
  };

  const addModule = () => {
    if (modules.length < 10) {
      setModules([...modules, { name: '', description: '' }]);
    } else {
      alert('You can only add up to 10 modules');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('modules', JSON.stringify(modules)); // Send modules as JSON string

    try {
      await api.post('/courses', formData);
      alert('Course added successfully');
      setTitle('');
      setDescription('');
      setImage(null);
      setModules([{ name: '', description: '' }]);
    } catch (err) {
      console.error(err);
      alert('Failed to add course');
    }
  };

  return (

    <form onSubmit={handleSubmit} className="course-form-container">
  <h2>Add New Course</h2>

  <input
    type="text"
    placeholder="Course Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    required
  />

  <textarea
    placeholder="Course Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    required
  />

  <input
    type="file"
    accept="image/*"
    onChange={(e) => setImage(e.target.files[0])}
    required
  />

  <h3>Modules (Max 10)</h3>
  {modules.map((module, idx) => (
    <div key={idx} className="module-box">
      <input
        type="text"
        placeholder={`Module ${idx + 1} Title`}
        value={module.name}
        onChange={(e) => handleModuleChange(idx, 'name', e.target.value)}
        required
      />
      <textarea
        placeholder={`Module ${idx + 1} Description`}
        value={module.description}
        onChange={(e) => handleModuleChange(idx, 'description', e.target.value)}
        required
      />
    </div>
  ))}

  {modules.length < 10 && (
    <button type="button" onClick={addModule}>
      Add Module
    </button>
  )}

  <br />
  <button type="submit">Submit Course</button>
</form>

  );
}

export default CourseForm;
