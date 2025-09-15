import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container-fluid py-4" style={{ paddingBottom: '100px' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold mb-0">HOME</h1>
        <button className="btn btn-sm btn-outline-secondary">☰</button>
      </div>

      {/* User Stats */}
      <div className="greenpoint-card p-4 text-center mb-4">
        <div 
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
          style={{ 
            width: '80px', 
            height: '80px', 
            backgroundColor: 'hsl(var(--secondary))',
            border: '3px solid hsl(var(--primary))'
          }}
        >
          <span className="h4 fw-bold text-primary mb-0">120</span>
        </div>
        
        <div className="mb-4">
          <div className="text-muted mb-1">Your Rank</div>
          <div className="display-4 fw-bold text-primary">3</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="d-grid gap-3 mb-4">
        <Link to="/challenges" className="btn btn-primary btn-lg">
          TAKE CHALLENGE
        </Link>
        <Link to="/submit-proof" className="btn btn-outline-primary btn-lg">
          SUBMIT PROOF
        </Link>
        <Link to="/leaderboard" className="btn btn-outline-primary btn-lg">
          LEADERBOARD
        </Link>
      </div>

      {/* Login Button */}
      <div className="text-center">
        <Link to="/login" className="btn btn-secondary">
          LOGIN
        </Link>
      </div>

      <Navigation />
    </div>
  );
};

export default Dashboard;