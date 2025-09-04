import { useState } from "react";

function PlantForm({ onAddPlant }) {
  const [form, setForm] = useState({
    name: "",
    watering: "",
    sunlight: "",
    fertilizer: "",
    category: "Indoor",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) return;
    onAddPlant(form);
    setForm({ name: "", watering: "", sunlight: "", fertilizer: "", category: "Indoor" });
  };

  return (
    <form className="plant-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="🌱 Plant name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="watering"
        placeholder="💧 Watering schedule"
        value={form.watering}
        onChange={handleChange}
      />
      <input
        type="text"
        name="sunlight"
        placeholder="☀️ Sunlight needs"
        value={form.sunlight}
        onChange={handleChange}
      />
      <input
        type="text"
        name="fertilizer"
        placeholder="🌿 Fertilizer type"
        value={form.fertilizer}
        onChange={handleChange}
      />
      <select name="category" value={form.category} onChange={handleChange}>
        <option>Indoor</option>
        <option>Outdoor</option>
        <option>Flowering</option>
        <option>Vegetables</option>
      </select>
      <button type="submit">➕ Add Plant</button>
    </form>
  );
}

export default PlantForm;
