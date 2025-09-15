import React from 'react';
import Navigation from '../components/Navigation';

const Achievements = () => {
  const achievements = [
    { id: 1, name: 'Tree Planter', icon: '🌳', earned: true },
    { id: 2, name: 'Water Saver', icon: '💧', earned: true },
    { id: 3, name: 'Eco Warrior', icon: '♻️', earned: false },
    { id: 4, name: 'Green Champion', icon: '🏆', earned: false },
    { id: 5, name: 'Planet Protector', icon: '🌍', earned: true },
    { id: 6, name: 'Clean Energy', icon: '⚡', earned: false },
  ];

  const completedAchievements = achievements.filter(a => a.earned);
  const progress = Math.round((completedAchievements.length / achievements.length) * 100);

  return (
    <div className="container-fluid py-4" style={{ paddingBottom: '100px' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold mb-0">ACHIEVEMENTS</h1>
        <button className="btn btn-sm btn-outline-secondary">☰</button>
      </div>

      {/* Progress Overview */}
      <div className="greenpoint-card p-4 mb-4">
        <div className="text-center mb-3">
          <div 
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: 'hsl(var(--primary))',
              color: 'white'
            }}
          >
            <span className="h5 fw-bold mb-0">{progress}%</span>
          </div>
          <h2 className="h5 fw-bold">@username</h2>
          <div className="achievement-badge">GOODS</div>
        </div>
      </div>

      {/* Achievement Grid */}
      <div className="row g-3 mb-4">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="col-6 col-md-4">
            <div className={`greenpoint-card p-3 text-center ${achievement.earned ? '' : 'opacity-50'}`}>
              <div 
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2"
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: achievement.earned ? 'hsl(var(--primary))' : 'hsl(var(--secondary))',
                  color: achievement.earned ? 'white' : 'hsl(var(--muted-foreground))'
                }}
              >
                <span className="fs-5">{achievement.icon}</span>
              </div>
              <div className="small fw-medium">{achievement.name}</div>
              {achievement.earned && (
                <div className="mt-2">
                  <span className="badge" style={{ backgroundColor: 'hsl(var(--success))' }}>
                    ✓
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Achievement Status */}
      <div className="greenpoint-card p-4">
        <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
          <span className="text-muted">●</span>
          <span className="text-muted">●</span>
          <span className="text-primary">●</span>
        </div>
        
        <div className="text-center">
          <div className="fw-bold mb-2">DOING</div>
          <small className="text-muted">lasemineepiry</small>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Achievements;