// src/components/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add this for external styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">CleanHome</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li>
          <Link to="/booking" className="book-now-button">
            Book Now
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
