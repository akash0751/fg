import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeFeatures = () => {
  return (
    <div className="container-fluid py-4 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="greenpoint-card p-5 text-center" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="mb-4">
          <div 
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
            style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: 'hsl(var(--accent))'
            }}
          >
            <span className="fs-2">🌿</span>
          </div>
          <h2 className="h3 fw-bold mb-4">Welcome</h2>
        </div>
        
        <div className="d-flex flex-column gap-3 mb-4">
          <div className="d-flex align-items-center gap-3">
            <span className="fs-5">🌳</span>
            <span className="fw-medium">Plant a tree</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="fs-5">📸</span>
            <span className="fw-medium">Upload proof</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="fs-5">🎁</span>
            <span className="fw-medium">Earn rewards</span>
          </div>
        </div>
        
        <Link to="/dashboard" className="btn btn-outline-primary btn-lg w-100">
          SKIP
        </Link>
      </div>
    </div>
  );
};

export default WelcomeFeatures;