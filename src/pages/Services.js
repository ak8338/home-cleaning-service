import CleaningTaskCard from '../components/CleaningTaskCard';

function Services() {
  const services = [
    { task: 'Basic Cleaning', description: 'Dusting, mopping, and vacuuming.', price: 50 },
    { task: 'Deep Cleaning', description: 'Complete home cleaning with attention to detail.', price: 100 },
    { task: 'Move-In/Move-Out Cleaning', description: 'Prepares your home for moving in or out.', price: 150 },
  ];

  return (
    <div>
      <h2>Our Cleaning Services</h2>
      {services.map((service) => (
        <CleaningTaskCard key={service.task} {...service} />
      ))}
    </div>
  );
}

export default Services;
