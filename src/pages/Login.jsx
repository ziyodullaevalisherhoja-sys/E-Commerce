import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-image">
        <img src="/images/75f394c0a1c7dc5b68a42239311e510f54d8cd59.jpg" alt="Shopping" />
      </div>
      <div className="auth-form-wrapper">
        <div className="auth-form">
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
          
          <div className="input-group">
            <input type="text" placeholder="Email or Phone Number" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>
          
          <div className="login-actions">
            <button className="btn-primary login-btn">Log In</button>
            <Link to="/forgot-password" style={{ color: '#db4444' }}>Forget Password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
