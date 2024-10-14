// src/pages/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import CleaningTaskCard from '../components/CleaningTaskCard';
import './Services.css';

function Services() {
  const featuredServices = [
    {
      task: 'Basic Cleaning',
      description: 'Includes dusting, mopping, and vacuuming. Ideal for regular upkeep of your home.',
      price: 50,
    },
    {
      task: 'Deep Cleaning',
      description: 'Complete home cleaning with a focus on hard-to-reach areas. Ideal for seasonal or one-time cleaning.',
      price: 100,
    },
    {
      task: 'Move-In/Move-Out Cleaning',
      description: 'Prepare your home for moving in or out with this top-to-bottom cleaning service.',
      price: 150,
    },
  ];

  return (
    <div className="services-container">
      <section className="featured-services">
        <h2>Featured Cleaning Services</h2>
        <div className="services-grid">
          {featuredServices.map((service) => (
            <Link
              key={service.task}
              to={`/booking?service=${encodeURIComponent(service.task)}`} /* Pass service type to Booking page */
            >
              <CleaningTaskCard
                task={service.task}
                description={service.description}
                price={service.price}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
