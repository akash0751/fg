import React from 'react';
import Navigation from '../components/Navigation';

const Profile = () => {
  return (
    <div className="container-fluid py-4" style={{ paddingBottom: '100px' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold mb-0">PROFILE</h1>
        <button className="btn btn-sm btn-outline-secondary">☰</button>
      </div>

      {/* Profile Info */}
      <div className="greenpoint-card p-4 mb-4">
        <div className="text-center mb-4">
          <div 
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: 'hsl(var(--secondary))'
            }}
          >
            <span className="fs-3">👤</span>
          </div>
          <h2 className="h5 fw-bold">@username</h2>
        </div>

        {/* Stats */}
        <div className="row text-center mb-4">
          <div className="col-6">
            <div className="fw-bold text-primary mb-1">Coin coins</div>
            <div className="text-muted">$</div>
          </div>
          <div className="col-6">
            <div className="fw-bold text-primary mb-1">Join kunt bay</div>
            <div className="text-muted">$</div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Profile;