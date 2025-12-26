import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../../data/products";

export default function EditProduct() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);
  
  const [form, setForm] = useState({
    name: product.name,
    shortDesc: product.shortDesc,
    description: product.description,
    image: product.image,
    applications: [...product.applications],
  });


  if (!product) {
    return <p className="p-10 text-red-600">Product not found</p>;
  }


  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleArrayChange = (index, value) => {
    const updated = [...form.applications];
    updated[index] = value;
    setForm({ ...form, applications: updated });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewURL = URL.createObjectURL(file);
    setForm((prev) => ({ ...prev, image: previewURL }));
  };

  return (
    <div className="max-w-6xl mx-auto mdp-6 space-y-6">

      <h1 className="text-2xl font-bold text-primaryDark">
        Edit Product
      </h1>

      {/* PRODUCT BASIC INFO */}
      <div className="bg-white p-6 rounded shadow">
        <label className="block font-semibold mb-1 text-primaryDark">Product Name</label>
        <input
          className="input mb-4 w-full"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <label className="block font-semibold mb-1 text-primaryDark">Short Description</label>
        <textarea
          className="input mb-4 w-full"
          value={form.shortDesc} 
          onChange={(e) => handleChange("shortDesc", e.target.value)}
        />

        <label className="block font-semibold mb-1 text-primaryDark">Full Description</label>
        <textarea
          className="input mb-4 w-full"
          rows={4}
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>

      {/* IMAGE SECTION */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-semibold mb-3 text-primaryDark">Product Image</h3>

        <img
          src={form.image}
          alt="Product"
          className="w-full md:w-64 mb-4 rounded border"
        />

        <input
          type="file"
          accept="image/*"
          className=" w-[250px] md:w-full"
          onChange={handleImageUpload}
        />
      </div>

      {/* APPLICATIONS */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-semibold mb-3 text-primaryDark">Applications</h3>

        {form.applications.map((item, index) => (
          <input
            key={index}
            className="input mb-3 w-full"
            value={item}
            onChange={(e) => handleArrayChange(index, e.target.value)}
          />
        ))}
      </div>

      {/* ACTIONS */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 border rounded hover:bg-primaryDark hover:text-white transition"
        >
          Cancel
        </button>

        <button
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
          onClick={() => alert("Save API integration here")}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
