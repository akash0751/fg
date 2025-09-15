import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="container-fluid py-4 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="greenpoint-card p-5 text-center" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="mb-4">
          <div 
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
            style={{ 
              width: '100px', 
              height: '100px', 
              backgroundColor: 'hsl(var(--primary))',
              color: 'white'
            }}
          >
            <span className="fs-1">🌱</span>
          </div>
          <h1 className="h2 fw-bold text-dark mb-3">GreenPoint</h1>
          <p className="text-muted mb-4">Earn rewards while saving the planet!</p>
        </div>
        
        <Link to="/welcome-features" className="btn btn-primary btn-lg w-100">
          NEXT
        </Link>
      </div>
    </div>
  );
};

export default Welcome;