import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './SignUp.css';

function SignUp() {
  return (
    <div className="auth-container">
      <div className="auth-image">
        <img src="/images/75f394c0a1c7dc5b68a42239311e510f54d8cd59.jpg" alt="Shopping" />
      </div>
      <div className="auth-form-wrapper">
        <div className="auth-form">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          
          <div className="input-group">
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Email or Phone Number" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>
          
          <button className="btn-primary auth-btn">Create Account</button>
          
          <button className="btn-google">
            <FcGoogle size={24} />
            <span>Sign up with Google</span>
          </button>
          
          <div className="auth-footer">
            <span>Already have account?</span>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
