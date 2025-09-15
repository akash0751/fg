import React from 'react';
import Navigation from '../components/Navigation';

const Groups = () => {
  const teamMembers = [
    { id: 1, name: 'Alice Johnson', avatar: '👩', status: 'online' },
    { id: 2, name: 'Bob Smith', avatar: '👨', status: 'offline' },
    { id: 3, name: 'Carol Davis', avatar: '👩‍🦱', status: 'online' },
  ];

  return (
    <div className="container-fluid py-4" style={{ paddingBottom: '100px' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold mb-0">GROUPS</h1>
        <button className="btn btn-sm btn-outline-secondary">☰</button>
      </div>

      {/* Action Buttons */}
      <div className="row g-3 mb-4">
        <div className="col-12">
          <button className="btn btn-secondary w-100 py-3 fw-medium">
            CREATE TEAM
          </button>
        </div>
        <div className="col-12">
          <button className="btn btn-secondary w-100 py-3 fw-medium">
            JOIN VIA CODE
          </button>
        </div>
      </div>

      {/* Team Section */}
      <div className="greenpoint-card p-4">
        <h2 className="h6 fw-bold mb-3 text-muted">TEAM</h2>
        
        <div className="d-flex flex-column gap-3">
          {teamMembers.map((member) => (
            <div key={member.id} className="d-flex align-items-center gap-3">
              <div 
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: 'hsl(var(--secondary))'
                }}
              >
                <span>{member.avatar}</span>
              </div>
              <div className="flex-grow-1">
                <div 
                  className="rounded"
                  style={{ 
                    height: '8px', 
                    backgroundColor: 'hsl(var(--secondary))',
                    width: '100%'
                  }}
                />
                <small className="text-muted d-block mt-1">{member.name}</small>
              </div>
              <div 
                className={`rounded-circle ${member.status === 'online' ? 'bg-success' : 'bg-secondary'}`}
                style={{ width: '8px', height: '8px' }}
              />
            </div>
          ))}
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Groups;