import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './SignUp.css';
import { DataContext } from '../context/DataContext';
import { loginFunc, registerFunc } from '../services';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { setToken } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const info = await registerFunc(name, email, password);
      console.log('Register response:', info);
      console.log('Message:', info?.message);

      if (info?.message?.includes("muvaffaqiyatli")) {
        // Registration successful — now login automatically
        const loginInfo = await loginFunc(email, password);
        console.log('Login response:', loginInfo);
        if (loginInfo?.access) {
          localStorage.setItem('token', loginInfo.access);
          setToken(loginInfo.access);
          navigate('/');
        } else {
          navigate('/login');
        }
      } else if (info?.email_or_phone?.[0]) {
        setError(info.email_or_phone[0]);
      } else if (info?.message) {
        setError(info.message);
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image">
        <img src="/images/75f394c0a1c7dc5b68a42239311e510f54d8cd59.jpg" alt="Shopping" />
      </div>
      <div className="auth-form-wrapper">
        <form className="auth-form" onSubmit={handleSignUp}>
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          
          {error && <div className="error-message" style={{color: 'red', marginBottom: '10px'}}>{error}</div>}
          
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          
          <button type="submit" className="btn-primary auth-btn" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
          
          <button type="button" className="btn-google">
            <FcGoogle size={24} />
            <span>Sign up with Google</span>
          </button>
          
          <div className="auth-footer">
            <span>Already have account?</span>
            <Link to="/login">Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
