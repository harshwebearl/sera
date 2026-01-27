import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditContactCMS() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    phone: "+91 75758 04585",
    email: "serawater007@gmail.com",
    address: "Shed No 94, Gajanan Industrial Park, Vatva, Ahmedabad – 382445",
    mapUrl: "https://maps.google.com/...",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-primary">Edit Contact Information</h1>
      


      <h1 className="text-2xl font-bold mb-6 text-primary">Edit Contact Information</h1>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <input
          className="w-full border p-2 rounded"
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="Phone Number"
        />

        <input
          className="w-full border p-2 rounded"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="Email Address"
        />

        <textarea
          className="w-full border p-2 rounded"
          value={form.address}
          onChange={(e) => handleChange("address", e.target.value)}
          placeholder="Office Address"
        />

        <input
          className="w-full border p-2 rounded"
          value={form.mapUrl}
          onChange={(e) => handleChange("mapUrl", e.target.value)}
          placeholder="Google Map Embed URL"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => alert("Saved (API later)")}
            className="bg-primary text-white px-6 py-2 rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
