// src/components/Footer.js
import './Footer.css'; // Add this for external styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} CleanHome. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/booking">Book Now</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
