import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in
    console.log('Google sign in clicked');
  };

  return (
    <div className="container-fluid py-4 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="greenpoint-card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        {/* Close Button */}
        <div className="d-flex justify-content-end mb-3">
          <Link to="/dashboard" className="btn btn-sm btn-outline-secondary">
            ✕
          </Link>
        </div>

        <h2 className="h4 text-center fw-bold mb-4">LOGIN</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="text-center mb-3">
            <Link to="/forgot-password" className="text-muted text-decoration-none">
              <small>Forgot password?</small>
            </Link>
          </div>
          
          <button type="submit" className="btn btn-primary w-100 mb-3">
            LOG IN
          </button>
          
          <button
            type="button"
            className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2"
            onClick={handleGoogleSignIn}
          >
            <span>G</span>
            <span>Sign in with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;