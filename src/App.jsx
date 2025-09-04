import { useState, useEffect } from "react";
import PlantForm from "./components/PlantForm";
import PlantList from "./components/PlantList";
import "./App.css";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Load from localStorage
  useEffect(() => {
    const savedPlants = JSON.parse(localStorage.getItem("plants")) || [];
    setPlants(savedPlants);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  const addPlant = (plant) => {
    setPlants([...plants, plant]);
  };

  const deletePlant = (name) => {
    setPlants(plants.filter((p) => p.name !== name));
  };

  const filteredPlants = plants.filter((plant) => {
    const matchesSearch = plant.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filter === "All" || plant.category === filter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <h1>🌱 Gardening Planner</h1>
      <PlantForm onAddPlant={addPlant} />

      {/* Search + Filter */}
      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Search plant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Indoor</option>
          <option>Outdoor</option>
          <option>Flowering</option>
          <option>Vegetables</option>
        </select>
      </div>

      <PlantList plants={filteredPlants} onDelete={deletePlant} />
    </div>
  );
}

export default App;
