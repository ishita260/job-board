import React, { useState } from 'react';
import './AddJob.css';

function AddJob() {
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = { position, company, location, salary, description };
    const oldJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    localStorage.setItem('jobs', JSON.stringify([...oldJobs, newJob]));

    setPosition('');
    setCompany('');
    setLocation('');
    setSalary('');
    setDescription('');
    alert('Job added successfully!');
  };

  return (
    <div className="add-job-container">
      <form onSubmit={handleSubmit} className="add-job-form">
        <h2 className="form-title">Post a New Job 🙌</h2>

        <div className="form-group">
          <label>Position</label>
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Company</label>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Salary</label>
          <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="e.g. ₹10,00,000/year" />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter job role..." />
        </div>

        <button type="submit" className="submit-btn">Add Job</button>
      </form>
    </div>
  );
}

export default AddJob;
