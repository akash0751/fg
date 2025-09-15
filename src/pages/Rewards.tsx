import React from 'react';
import Navigation from '../components/Navigation';

const Rewards = () => {
  return (
    <div className="container-fluid py-4" style={{ paddingBottom: '100px' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold mb-0">REWARDS</h1>
        <button className="btn btn-sm btn-outline-secondary">☰</button>
      </div>

      {/* Coins Section */}
      <div className="greenpoint-card p-4 mb-4">
        <h2 className="h6 fw-bold mb-3 text-center">COINS</h2>
        <div className="text-center mb-4">
          <div 
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{ 
              width: '60px', 
              height: '60px', 
              backgroundColor: 'hsl(var(--primary))',
              color: 'white'
            }}
          >
            <span className="fs-4">💰</span>
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <div className="greenpoint-card p-4 mb-4">
        <h2 className="h6 fw-bold mb-3 text-center">CERTIFICATE</h2>
        <div className="text-center mb-3">
          <div 
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{ 
              width: '60px', 
              height: '60px', 
              backgroundColor: 'hsl(var(--secondary))'
            }}
          >
            <span className="fs-4">🏆</span>
          </div>
        </div>
        
        <div className="text-center">
          <button className="btn btn-primary">DONATE COINS</button>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Rewards;