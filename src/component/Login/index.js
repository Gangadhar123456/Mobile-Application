import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() === '12345') {
      onLogin(username);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="mt-5 d-flex justify-content-center align-items-center">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="mb-3">Login</h2>
        <details>
          <summary>Login Details</summary>
          <p>
            Welcome! You can log in with your name, and the password is <strong>12345</strong>.
          </p>
        </details>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        {error && <div className="alert alert-danger mb-3">{error}</div>}
        <button className="btn btn-primary btn-login" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
