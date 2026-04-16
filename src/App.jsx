import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          {/* Fallback route */}
          <Route path="*" element={<div className="container section-padding"><h2>404 Not Found</h2></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;