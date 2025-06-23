import React, { useEffect, useState } from 'react';
import './AllJob.css';

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [appliedIndexes, setAppliedIndexes] = useState([]);

  useEffect(() => {
    const existingJobs = JSON.parse(localStorage.getItem('jobs'));

    if (!existingJobs || existingJobs.length === 0) {
      const defaultJobs = [
        {
          position: 'Frontend Developer',
          company: 'Google',
          location: 'Bangalore',
          salary: '₹12,00,000/year',
          description: 'Work with React and TypeScript to build scalable UI components.',
        },
        {
          position: 'Backend Developer',
          company: 'Amazon',
          location: 'Hyderabad',
          salary: '₹15,00,000/year',
          description: 'Develop and maintain REST APIs using Node.js and Express.',
        },
        {
          position: 'Full Stack Engineer',
          company: 'Microsoft',
          location: 'Noida',
          salary: '₹18,00,000/year',
          description: 'Build full-stack applications using MERN stack.',
        },
        {
          position: 'UI/UX Designer',
          company: 'Adobe',
          location: 'Pune',
          salary: '₹10,00,000/year',
          description: 'Design intuitive user interfaces using Figma and Adobe XD.',
        },
      ];
      localStorage.setItem('jobs', JSON.stringify(defaultJobs));
      setJobs(defaultJobs);
    } else {
      setJobs(existingJobs);
    }
  }, []);

  const handleApply = (index) => {
    setAppliedIndexes((prev) => [...prev, index]);
    alert(`✅ Applied for ${jobs[index].position} at ${jobs[index].company}`);
  };

  return (
    <section className="all-jobs-container">
      <h2 className="all-jobs-title">All Jobs 💼</h2>
      {jobs.length === 0 ? (
        <p className="no-jobs-msg">No jobs found.</p>
      ) : (
        <div className="job-card-list">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <h3 className="job-title">{job.position}</h3>
              <p className="job-company"><strong>Company:</strong> {job.company}</p>
              <p className="job-location"><strong>Location:</strong> {job.location}</p>
              <p className="job-salary"><strong>Salary:</strong> {job.salary}</p>
              <p className="job-description"><strong>Description:</strong> {job.description}</p>
              <button
                className={`apply-btn ${appliedIndexes.includes(index) ? 'applied' : ''}`}
                onClick={() => handleApply(index)}
                disabled={appliedIndexes.includes(index)}
              >
                {appliedIndexes.includes(index) ? 'Applied' : 'Apply'}
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AllJobs;
