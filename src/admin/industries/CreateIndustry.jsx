import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTint,
  FaFire,
  FaRecycle,
  FaBookOpen,
  FaPills,
  FaBeer,
  FaDna,
  FaLeaf,
} from "react-icons/fa";

export default function CreateIndustry() {
  const navigate = useNavigate();

  const iconOptions = [
    { label: "Water Drop", value: <FaTint /> },
    { label: "Fire", value: <FaFire /> },
    { label: "Recycle", value: <FaRecycle /> },
    { label: "Book", value: <FaBookOpen /> },
    { label: "Pills", value: <FaPills /> },
    { label: "Beer", value: <FaBeer /> },
    { label: "DNA", value: <FaDna /> },
    { label: "Leaf", value: <FaLeaf /> },
  ];

  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`
Add this object inside industries array:

{
  title: "${title}",
  icon: ${icon},
}
    `);

    alert("Copy console data and paste into industries array");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add Industry</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Industry Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <select
          onChange={(e) => setIcon(iconOptions[e.target.value].label)}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select Icon</option>
          {iconOptions.map((item, index) => (
            <option key={index} value={index}>
              {item.label}
            </option>
          ))}
        </select>

        <button className="bg-primary text-white px-6 py-2 rounded">
          Save
        </button>
        <button onClick={() => navigate("/admin/industriescms")} className="bg-white text-primary px-6 py-2 border border-primary ml-2 rounded">
          Cancel
        </button>
      </form>
    </div>
  );
}
