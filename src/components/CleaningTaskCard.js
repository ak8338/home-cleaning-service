// src/components/CleaningTaskCard.js
import React from 'react';


function CleaningTaskCard({ task, description, price }) {
  return (
    <div className="cleaning-card">
      <h3>{task}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default CleaningTaskCard;
