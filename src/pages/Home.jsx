import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";


import { 
  FiEye, 
  FiPhone, 
  FiMonitor, 
  FiWatch, 
  FiCamera, 
  FiHeadphones, 
  FiTruck, 
  FiCheckCircle 
} from 'react-icons/fi';
import Hero from '../components/Hero';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <Hero />

      {/* Flash Sales Section */}
      <section className="section-padding container">
        <span className="text-overline">Today’s</span>
        <div className="flash-sales-header">
          <h2 className="section-title">Flash Sales</h2>
        </div>

        <div className="product-grid">
          <div className="product-card">
            <div className="product-img-wrapper">
              <span className="discount-badge">-40%</span>
              <img src="/public/images/5d5c2e5250752d55f8b60f2aa2923183dadbc135.png" alt="Gamepad" className="product-img-gamepad" />
              <div className="add-to-cart">Add To Cart</div>
            </div>
            <div className="product-info">
              <h3>HAVIT HV-G92 Gamepad</h3>
              <div className="price-wrapper">
                
                <span className="price">$120</span>
                <span className="old-price">$160</span>
              </div>
              <div className="rating">
                <FaStar />  <FaStar />  <FaStar />  <FaStar />  <FaStar />  
                <span className="rating-count">(88)</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img-wrapper">
              <span className="discount-badge">-35%</span>
              <img src="/public/images/e59d9f348cc24eeff489863523b63971c3ff8e4a.png" alt="Keyboard" className="product-img-keyboard" />
              <div className="add-to-cart">Add To Cart</div>
            </div>
            <div className="product-info">
              <h3>AK-900 Wired Keyboard</h3>
              <div className="price-wrapper">
                <span className="price">$960</span>
                <span className="old-price">$1160</span>
              </div>
              <div className="rating">
                <FaStar />  <FaStar />  <FaStar />  <FaStar />  <CiStar />9
                <span className="rating-count">(75)</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img-wrapper">
              <span className="discount-badge">-30%</span>
              <img src="/images/Frame 613.png" alt="Monitor" className="product-img-monitor" />
              <div className="add-to-cart">Add To Cart</div>
            </div>
            <div className="product-info">
              <h3>IPS LCD Gaming Monitor</h3>
              <div className="price-wrapper">
                <span className="price">$370</span>
                <span className="old-price">$400</span>
              </div>
              <div className="rating">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> 
                <span className="rating-count">(99)</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img-wrapper">
              <span className="discount-badge">-25%</span>
              <img src="/public/images/Frame 614.png" alt="Chair" className="product-img-chair" />
              <div className="add-to-cart">Add To Cart</div>
            </div>
            <div className="product-info">
              <h3>S-Series Comfort Chair</h3>
              <div className="price-wrapper">
                <span className="price">$375</span>
                <span className="old-price">$400</span>
              </div>
              <div className="rating">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> 
                <span className="rating-count">(99)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="view-all-container">
          <button className="btn-primary">View All Products</button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding container">
        <span className="text-overline">Categories</span>
        <h2 className="section-title">Browse By Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <FiPhone  />
            <span>Phones</span>
          </div>
          <div className="category-card">
            <FiMonitor  />
            <span>Computers</span>
          </div>
          <div className="category-card">
            <FiWatch  />
            <span>SmartWatch</span>
          </div>
          <div className="category-card">
            <FiCamera  />
            <span>Camera</span>
          </div>
          <div className="category-card">
            <FiHeadphones  />
            <span>HeadPhones</span>
          </div>
          <div className="category-card">
            <LuGamepad />
            <span>Gaming</span>
          </div>
        </div>
      </section>

      {/* Best Selling Section */}
      <section className="section-padding container">
        <span className="text-overline">This Month</span>
        <div className="best-selling-header">
          <h2 className="section-title">Best Selling Products</h2>
          <button className="btn-primary">View All</button>
        </div>
        <div className="product-grid">
           <div className="product-card">
            <div className="product-img-wrapper">
              <img src="/public/images/ee9a38001e9f94261b28e16ea21bacb4144473e8.png" alt="Coat" className="product-img-coat" />
            </div>
            <div className="product-info">
              <h3>The north coat</h3>
              <div className="price-wrapper"><span className="price">$260</span><span className="old-price">$360</span></div>
              <div className="rating"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src="/public/images/4f3ca1d12722dbdf98f25179d3c0b785988c513d.png" alt="Bag" className="product-img-bag" />
            </div>
            <div className="product-info">
              <h3>Gucci duffle bag</h3>
              <div className="price-wrapper"><span className="price">$960</span><span className="old-price">$1160</span></div>
              <div className="rating"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src="/public/images/Frame 610.png" alt="Cooler" className="product-img-cooler" />
            </div>
            <div className="product-info">
              <h3>RGB liquid CPU Cooler</h3>
              <div className="price-wrapper"><span className="price">$160</span><span className="old-price">$170</span></div>
              <div className="rating"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-wrapper">
              <img src="/public/images/Frame 612.png" alt="Bookshelf" className="product-img-bookshelf" />
            </div>
            <div className="product-info">
              <h3>Small BookSelf</h3>
              <div className="price-wrapper"><span className="price">$360</span></div>
              <div className="rating"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="section-padding container">
        <div className="promo-banner">
          <div className="promo-content">
            <span className="promo-category">Categories</span>
            <h2 className="promo-title">Enhance Your Music Experience</h2>
            <button className="promo-btn">Buy Now!</button>
          </div>
          <img src="/public/images/3cc943ca7e210f637fc0504b7d93cd207df744c2.png" alt="Speakers" className="promo-image" />
        </div>
      </section>

      {/* New Arrival */}
      <section className="section-padding container">
        <span className="text-overline">Featured</span>
        <h2 className="section-title">New Arrival</h2>
        <div className="new-arrival-grid">
          <div className="arrival-large">
            <img src="/public/images/1c360f790c1817d3afa266b3c9f8c81ff0ed4428.png" alt="PS5" className="arrival-img-large" />
            <div className="arrival-content">
              <h3>PlayStation 5</h3>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <Link to="/shop">Shop Now</Link>
            </div>
          </div>
          <div className="arrival-medium">
             <img src="/public/images/455c8d6408463f7e8f57dd3048a2444dbfa0cb90.jpg" alt="Women" className="arrival-img-full" />
             <div className="arrival-content">
              <h3>Women’s Collections</h3>
              <p>Featured woman collections that give you another vibe.</p>
              <Link to="/shop">Shop Now</Link>
            </div>
          </div>
          <div className="arrival-small-1">
             <img src="/public/images/Frame 707.png" alt="Speakers" className="arrival-img-small" />
             <div className="arrival-content">
              <h3>Speakers</h3>
              <p>Amazon wireless speakers</p>
              <Link to="/shop">Shop Now</Link>
            </div>
          </div>
          <div className="arrival-small-2">
             <img src="/public/images/Frame 706.png" alt="Perfume" className="arrival-img-small" />
             <div className="arrival-content">
              <h3>Perfume</h3>
              <p>GUCCI INTENSE OUD EDP</p>
              <Link to="/shop">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding container">
        <div className="features-grid">
          <div className="feature-item">
            <div className="icon-outer"><div className="icon-inner"><FiTruck  /></div></div>
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="feature-item">
            <div className="icon-outer"><div className="icon-inner"><FiHeadphones  /></div></div>
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="feature-item">
            <div className="icon-outer"><div className="icon-inner"><FiCheckCircle  /></div></div>
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We return money within 30 days</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
