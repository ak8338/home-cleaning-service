// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Your Home, Spotlessly Clean</h1>
          <p>Professional home cleaning service at your fingertips. Book now for a pristine home!</p>
          <Link to="/booking" className="book-now-button">Book Now</Link>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>About Us</h2>
          <p>
            At CleanHome, we pride ourselves on delivering professional cleaning services to ensure your home is always spotless and stress-free. 
            With years of experience and a highly trained staff, we aim to provide personalized, reliable, and efficient services to all our clients.
          </p>
          <div className="about-us-gallery">
            <img src="/images/cleaning1.jpg" alt="Cleaning Service 1" />
            <img src="/images/cleaning2.jpg" alt="Cleaning Service 2" />
            <img src="/images/cleaning3.jpg" alt="Cleaning Service 3" />
          </div>
        </motion.div>
      </section>

      {/* Slogans Section */}
      <section className="slogans">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3, duration: 1 }}
        >
          <h2>Why Choose Us?</h2>
          <div className="slogans-list">
            <motion.div className="slogan-item">
              <h3>Reliable & Trustworthy</h3>
              <p>We bring years of experience and professionalism to each cleaning session.</p>
            </motion.div>
            <motion.div className="slogan-item">
              <h3>Eco-Friendly Products</h3>
              <p>We use non-toxic, eco-friendly products to keep your home safe and clean.</p>
            </motion.div>
            <motion.div className="slogan-item">
              <h3>Customized Cleaning</h3>
              <p>Our services are tailored to meet your specific cleaning needs.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
