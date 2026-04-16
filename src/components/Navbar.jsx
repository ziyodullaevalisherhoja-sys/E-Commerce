import { NavLink, Link } from 'react-router-dom';
import { FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">Exclusive</Link>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
        <div className="nav-icons">
          <div className="search-bar">
            <input type="text" placeholder="What are you looking for?" />
            <FiSearch size={20} />
          </div>
          <Link to="/wishlist" className="icon-link"><FiHeart size={24} /></Link>
          <Link to="/cart" className="icon-link"><FiShoppingCart size={24} /></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
