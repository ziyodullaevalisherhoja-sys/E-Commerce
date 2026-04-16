import { Link } from 'react-router-dom';
import { FaApple, FaArrowRight } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  return (
    <div className="container">
      <section className="hero">
        <aside className="sidebar">
          <ul>
            <li>Woman’s Fashion</li>
            <li>Men’s Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </aside>
        <div className="hero-banner">
          <div className="hero-content">
            <div className="hero-brand">
              <FaApple size={40} color="white" />
              <span>iPhone 14 Series</span>
            </div>
            <h1>Up to 10% off Voucher</h1>
            <Link to="" className="hero-link">
              Shop Now <FaArrowRight className="hero-link-arrow" />
            </Link>
          </div>
          <div className="hero-image">
            <img src="/images/dc40ba897215f42e5883a64157f0aa3a4d1a866a.jpg" alt="iPhone 14" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
