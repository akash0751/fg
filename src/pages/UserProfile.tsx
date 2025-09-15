import React from 'react';
import Navigation from '../components/Navigation';

const UserProfile = () => {
  return (
    <div className="container-fluid py-4" style={{ paddingBottom: '100px' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold mb-0">ACHIEVEMENTS</h1>
        <button className="btn btn-sm btn-outline-secondary">☰</button>
      </div>

      {/* User Profile Card */}
      <div className="greenpoint-card p-4 mb-4">
        <div className="text-center">
          <div 
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{ 
              width: '100px', 
              height: '100px', 
              backgroundColor: 'hsl(var(--secondary))'
            }}
          >
            <span className="fs-1">👤</span>
          </div>
          
          <h2 className="h4 fw-bold mb-2">@username</h2>
          
          <div className="achievement-badge mb-3">GOODS</div>
        </div>
      </div>

      {/* Profile Sections */}
      <div className="d-flex flex-column gap-3">
        <div className="greenpoint-card p-4">
          <h3 className="h6 fw-bold text-primary mb-0">History</h3>
        </div>
        
        <div className="greenpoint-card p-4">
          <h3 className="h6 fw-bold text-primary mb-0">Submissions</h3>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default UserProfile;