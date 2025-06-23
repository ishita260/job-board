import React from 'react';
import './Stats.css'; // Create this file for styling

const Stats = () => {
  const statsData = [
    { title: 'Total Jobs Posted', value: 42, color: '#3b82f6' },
    { title: 'Applications Received', value: 118, color: '#10b981' },
    { title: 'Interviews Scheduled', value: 15, color: '#facc15' },
    { title: 'Candidates Hired', value: 6, color: '#6366f1' },
    { title: 'Applications Rejected', value: 40, color: '#ef4444' },
  ];

  return (
    <section className="stats-container">
      <h2 className="stats-title">Dashboard Stats📈</h2>
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="stat-card"
            style={{ borderBottom: `5px solid ${stat.color}` }}
          >
            <h4>{stat.title}</h4>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
