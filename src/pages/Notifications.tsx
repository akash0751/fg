import React from 'react';
import Navigation from '../components/Navigation';

const Notifications = () => {
  const notifications = [
    { id: 1, type: 'achievement', message: 'New achievement unlocked!', time: '2 min ago' },
    { id: 2, type: 'challenge', message: 'Challenge deadline approaching', time: '1 hour ago' },
    { id: 3, type: 'reward', message: 'You earned 50 coins!', time: '3 hours ago' },
    { id: 4, type: 'team', message: 'Team member completed task', time: '1 day ago' },
    { id: 5, type: 'system', message: 'App update available', time: '2 days ago' },
  ];

  return (
    <div className="container-fluid py-4" style={{ paddingBottom: '100px' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold mb-0">NOTIFICATIONS</h1>
        <button className="btn btn-sm btn-outline-secondary">☰</button>
      </div>

      {/* Notifications List */}
      <div className="d-flex flex-column gap-3 mb-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1">
                <div className="fw-medium mb-1">{notification.message}</div>
                <small className="text-muted">{notification.time}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mark All Read */}
      <div className="text-center">
        <button className="btn btn-outline-primary">MARK ALL AS READ</button>
      </div>

      <Navigation />
    </div>
  );
};

export default Notifications;