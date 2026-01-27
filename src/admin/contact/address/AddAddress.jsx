import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddAddress() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    city: "",
    address: "",
    phone: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-primary">Add New Address</h1>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="Branch Name (e.g. Rajkot Office)"
          value={form.city}
          onChange={(e) => handleChange("city", e.target.value)}
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Full Address"
          value={form.address}
          onChange={(e) => handleChange("address", e.target.value)}
        />


        <div className="flex justify-end gap-3">
          <button onClick={() => navigate(-1)} className="border px-4 py-2 rounded">
            Cancel
          </button>
          <button className="bg-primary text-white px-6 py-2 rounded">
            Save Address
          </button>
        </div>
      </div>
    </div>
  );
}
