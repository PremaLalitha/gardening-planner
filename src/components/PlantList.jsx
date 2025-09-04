import PlantCard from "./PlantCard";

function PlantList({ plants, onDelete }) {
  if (plants.length === 0) {
    return <p className="empty">🌻 No plants found. Add some!</p>;
  }

  return (
    <div className="plant-list">
      {plants.map((plant, index) => (
        <PlantCard key={index} plant={plant} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default PlantList;
