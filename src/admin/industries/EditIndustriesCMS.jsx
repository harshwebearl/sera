import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
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

export default function EditIndustriesCMS() {
  const { id } = useParams();
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

  const handleSave = () => {
    console.log(`
Update this object in industries array manually for id: ${id}

{
  title: "${title}",
  icon: ${icon},
}
    `);

    alert("Check console and update industries array manually");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Industry</h1>

      <input
        type="text"
        placeholder="Industry Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />

      <select
        onChange={(e) => setIcon(iconOptions[e.target.value].label)}
        className="w-full border p-2 rounded mb-4"
      >
        <option value="">Select Icon</option>
        {iconOptions.map((item, index) => (
          <option key={index} value={index}>
            {item.label}
          </option>
        ))}
      </select>

      <button
        onClick={handleSave}
        className="bg-primary text-white px-6 py-2 rounded"
      >
        Save Changes
      </button>

       <button onClick={() => navigate("/admin/industriescms")} className="bg-white text-primary px-6 py-2 border border-primary ml-2 rounded">
          Cancel
        </button>
    </div>
  );
}
