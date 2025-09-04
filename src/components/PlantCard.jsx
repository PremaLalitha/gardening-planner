import { useState } from "react";

function PlantCard({ plant, onDelete }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="plant-card">
      <h2>{plant.name}</h2>
      <p>Category: {plant.category}</p>

      {showDetails && (
        <div className="details">
          <p>💧 Water: {plant.watering}</p>
          <p>☀️ Sunlight: {plant.sunlight}</p>
          <p>🌿 Fertilizer: {plant.fertilizer}</p>
        </div>
      )}

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      <button className="delete" onClick={() => onDelete(plant.name)}>
        ❌ Remove
      </button>
    </div>
  );
}

export default PlantCard;
