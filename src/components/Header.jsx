import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      {/* Top Header */}
      <div className="top-header">
        <div className="container top-header-content">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
            <Link to="/shop" className="shop-now-link">ShopNow</Link>
          </p>
        </div>
      </div>

      <Navbar />
    </header>
  );
}

export default Header;
