import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Challenges = () => {
  const challenges = [
    { 
      id: 1, 
      title: 'Tree Planting', 
      icon: '🌱', 
      status: 'available',
      difficulty: 'easy'
    },
    { 
      id: 2, 
      title: 'Waste Cleanup', 
      icon: '🗑️', 
      status: 'available',
      difficulty: 'medium'
    },
  ];

  const specialChallenge = {
    title: 'SUMMER WATER DRIVE',
    icon: '🌱',
    description: 'Help conserve water this summer',
    status: 'featured'
  };

  return (
    <div className="container-fluid py-4" style={{ paddingBottom: '100px' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold mb-0">CHALLENGES</h1>
        <button className="btn btn-sm btn-outline-secondary">☰</button>
      </div>

      {/* Regular Challenges */}
      <div className="row g-3 mb-4">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="col-12">
            <div className="greenpoint-card p-4">
              <div className="d-flex align-items-center gap-3">
                <span className="fs-3">{challenge.icon}</span>
                <div className="flex-grow-1">
                  <h3 className="h6 fw-bold mb-0">{challenge.title}</h3>
                  <span className="achievement-badge">
                    {challenge.difficulty}
                  </span>
                </div>
                <Link 
                  to={`/challenge/${challenge.id}`}
                  className="btn btn-sm btn-outline-primary"
                >
                  Start
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Challenge */}
      <div className="greenpoint-card p-4 text-center">
        <div 
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
          style={{ 
            width: '80px', 
            height: '80px', 
            backgroundColor: 'hsl(var(--primary))',
            color: 'white'
          }}
        >
          <span className="fs-2">{specialChallenge.icon}</span>
        </div>
        
        <h2 className="h5 fw-bold mb-2">{specialChallenge.title}</h2>
        <p className="text-muted mb-3">{specialChallenge.description}</p>
        
        <Link to="/summer-challenge" className="btn btn-primary">
          JOIN CHALLENGE
        </Link>
      </div>

      <Navigation />
    </div>
  );
};

export default Challenges;