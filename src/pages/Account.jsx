import React, { useState, useEffect, useContext } from 'react';
import './Account.css';
import { DataContext } from '../context/DataContext';
import { getUserInfo, updateUserInfo } from '../services';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Account = () => {
  const { token } = useContext(DataContext);
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email_or_phone: '',
    address: ''
  });
  const [initialData, setInitialData] = useState({});
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    new: false,
    confirm: false
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    if (token) {
      getUserInfo(token).then((data) => {
        if (data) {
          const formattedData = {
            first_name: data.first_name || '',
            last_name: data.last_name || '',
            email_or_phone: data.email_or_phone || '',
            address: data.address || ''
          };
          setUserData(formattedData);
          setInitialData(formattedData);
        }
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleCancel = () => {
    setUserData(initialData);
    setPasswords({ newPassword: '', confirmPassword: '' });
    setShowPasswords({ new: false, confirm: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setMessage({ text: 'Please log in to update your profile.', ontype: 'error' });
      return;
    }

    if (passwords.newPassword && passwords.newPassword !== passwords.confirmPassword) {
      setMessage({ text: 'New passwords do not match.', type: 'error' });
      return;
    }

    try {
      const updateData = { 
        first_name: userData.first_name,
        last_name: userData.last_name,
        address: userData.address
      };
      
      if (userData.email_or_phone) {
        if (userData.email_or_phone.includes('@')) {
          updateData.email = userData.email_or_phone;
        } else {
          updateData.phone = userData.email_or_phone;
        }
      }

      if (passwords.newPassword) {
        updateData.password = passwords.newPassword;
      }

      const result = await updateUserInfo(token, updateData);
      if (result) {
        const updated = {
          first_name: result.first_name || userData.first_name,
          last_name: result.last_name || userData.last_name,
          email_or_phone: result.email_or_phone || userData.email_or_phone,
          address: result.address || userData.address
        };
        setUserData(updated);
        setInitialData(updated);
        setMessage({ text: 'Profile updated successfully!', type: 'success' });
        setPasswords({ newPassword: '', confirmPassword: '' });
        setTimeout(() => setMessage({ text: '', type: '' }), 3000);
      }
    } catch (error) {
      console.error('Profile update error:', error);
      setMessage({ text: error.message || 'An error occurred during update.', type: 'error' });
    }
  };

  if (loading) {
    return (
      <div className="container section-padding" style={{textAlign: 'center', padding: '100px'}}>
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="container section-padding" style={{textAlign: 'center', padding: '100px'}}>
        <h2 style={{marginBottom: '20px'}}>Access Denied</h2>
        <p>Please log in to access your account settings.</p>
        <Link to="/login" className="btn-primary" style={{display: 'inline-block', marginTop: '20px', textDecoration: 'none'}}>Go to Login</Link>
      </div>
    );
  }

  return (
    <div className="account-page container section-padding">
      <div className="account-header">
        <div className="breadcrumbs">
          <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">My Account</span>
        </div>
        <div className="welcome-msg">
          Welcome! <span className="user-name">{initialData.first_name} {initialData.last_name}</span>
        </div>
      </div>

      <div className="account-content">
        {/* Left Sidebar */}
        <aside className="account-sidebar">
          <div className="sidebar-section">
            <h3>Manage My Account</h3>
            <ul>
              <li className="active">My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>
          <div className="sidebar-section">
            <h3>My Orders</h3>
            <ul>
              <li>My Returns</li>
              <li>My Cancellations</li>
            </ul>
          </div>
          <div className="sidebar-section">
            <h3>My Wishlist</h3>
          </div>
        </aside>

        {/* Right Content */}
        <div className="profile-edit-card">
          <h2 className="profile-title">Edit Your Profile</h2>
          {message.text && <div className={`message ${message.type}`}>{message.text}</div>}
          <form className="profile-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input 
                  type="text" 
                  name="first_name" 
                  value={userData.first_name} 
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input 
                  type="text" 
                  name="last_name" 
                  value={userData.last_name} 
                  onChange={handleInputChange}
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email_or_phone" 
                  value={userData.email_or_phone} 
                  onChange={handleInputChange}
                  placeholder="Email or Phone"
                  required
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input 
                  type="text" 
                  name="address" 
                  value={userData.address} 
                  onChange={handleInputChange}
                  placeholder="Address"
                />
              </div>
            </div>

            <div className="password-change-section">
              <h3>Password Changes</h3>
              <div className="form-group password-input-wrapper">
                <input 
                  type={showPasswords.new ? 'text' : 'password'} 
                  name="newPassword"
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="New Password" 
                />
                <button 
                  type="button" 
                  className="password-toggle"
                  onClick={() => togglePasswordVisibility('new')}
                >
                  {showPasswords.new ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
              <div className="form-group password-input-wrapper">
                <input 
                  type={showPasswords.confirm ? 'text' : 'password'} 
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
                  placeholder="Confirm New Password" 
                />
                <button 
                  type="button" 
                  className="password-toggle"
                  onClick={() => togglePasswordVisibility('confirm')}
                >
                  {showPasswords.confirm ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            <div className="profile-form-footer">
              <button type="button" className="btn-text" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="btn-primary">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;

