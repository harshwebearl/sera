import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addresses } from "../../../data/addresses";

export default function EditAddress() {
  const { id } = useParams();
  const navigate = useNavigate();

  const addressData = addresses.find((a) => a.id === Number(id));

  const [form, setForm] = useState(addressData);

  if (!addressData) return <p className="p-6">Address not found</p>;

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-primary">Edit Address</h1>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <input
          className="w-full border p-2 rounded"
          value={form.city}
          onChange={(e) => handleChange("city", e.target.value)}
        />

        <textarea
          className="w-full border p-2 rounded"
          value={form.address}
          onChange={(e) => handleChange("address", e.target.value)}
        />


        <div className="flex justify-end gap-3">
          <button onClick={() => navigate(-1)} className="border px-4 py-2 rounded">
            Cancel
          </button>
          <button className="bg-primary text-white px-6 py-2 rounded">
            Update Address
          </button>
        </div>
      </div>
    </div>
  );
}
