import React, { useEffect, useState } from 'react';
import './DeleteJob.css';

function DeleteJob() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(savedJobs);
  }, []);

  const deleteJob = (indexToDelete) => {
    const updatedJobs = jobs.filter((_, index) => index !== indexToDelete);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
  };

  if (jobs.length === 0) {
    return <h2 className="no-jobs">No jobs found😢</h2>;
  }

  return (
    <div className="job-list-container">
      <h1>Saved Jobs 🪪</h1>
      {jobs.map((job, index) => (
        <div key={index} className="job-card">
          <div>
            <h3>{job.position}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
          </div>
          <button className="delete-btn" onClick={() => deleteJob(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default DeleteJob;
