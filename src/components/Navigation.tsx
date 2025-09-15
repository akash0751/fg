import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: '🏠', label: 'Home' },
    { path: '/groups', icon: '👥', label: 'Groups' },
    { path: '/challenges', icon: '🏆', label: 'Challenges' },
    { path: '/profile', icon: '👤', label: 'Profile' },
  ];

  return (
    <nav className="nav-bottom fixed-bottom">
      <div className="container-fluid">
        <div className="row">
          {navItems.map((item) => (
            <div key={item.path} className="col-3">
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <div className="d-flex flex-column align-items-center">
                  <span className="fs-5 mb-1">{item.icon}</span>
                  <small className="fw-medium">{item.label}</small>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;