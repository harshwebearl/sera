import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../data/products";
import { useState } from "react";

export default function EditProduct() {
  const { category, slug } = useParams();
  const navigate = useNavigate();

  const categoryData = products.find(c => c.category === category);
  const product = categoryData?.items.find(p => p.slug === slug);

  const [formData, setFormData] = useState({
    category: category || "",
    name: product?.name || "",
    shortDesc: product?.shortDesc || "",
    description: product?.description || "",
    videoUrl: product?.videoUrl || "",
    brochure: product?.brochure || "",
    applications: product?.applications || [],
    features: product?.features || [],
    image: product?.image || ""
  });


  const [imagePreview, setImagePreview] = useState(product?.image || "");

  if (!product) {
    return <p className="p-10 text-red-600">Product not found</p>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index, field, value) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData({ ...formData, [field]: updated });
  };

  const addPoint = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const removePoint = (index, field) => {
    const updated = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updated });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, brochure: file.name });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file.name });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    console.log("Updated Product:", formData);
    alert("Product updated (static demo)");
    navigate("/admin/productslist");
  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold text-primaryDark mb-6">
        Edit Product: {product.name}
      </h1>

      <div className="space-y-4">

        {/* IMAGE UPLOAD */}
        <div>
          <h3 className="font-semibold text-primaryDark mb-2">Product Image</h3>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border p-2 rounded"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-3 h-40 object-contain border rounded p-2"
            />
          )}
        </div>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2 rounded bg-white"
        >
          <option value="">Select Category</option>
          <option value="aeration-equipment">Aeration Equipment</option>
          <option value="sludge-handling">Sludge Handling Systems</option>
          <option value="dosingpump-agitators">Dosing Pumps & Agitators</option>
          <option value="filteration-equipments">Filtration Equipment</option>
        </select>


        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Product Name"
        />

        <textarea
          name="shortDesc"
          value={formData.shortDesc}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Short Description"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded h-32"
          placeholder="Full Description"
        />



        {/* APPLICATIONS */}
        <div>
          <h3 className="font-semibold text-primaryDark mb-2">Applications</h3>
          {formData.applications.map((app, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input
                value={app}
                onChange={(e) => handleArrayChange(i, "applications", e.target.value)}
                className="w-full border p-2 rounded"
              />
              <button onClick={() => removePoint(i, "applications")} className="text-red-500">✕</button>
            </div>
          ))}
          <button onClick={() => addPoint("applications")} className="text-sm text-primary">+ Add Application</button>
        </div>

        {/* FEATURES */}
        <div>
          <h3 className="font-semibold text-primaryDark mb-2">Key Features</h3>
          {formData.features.map((f, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input
                value={f}
                onChange={(e) => handleArrayChange(i, "features", e.target.value)}
                className="w-full border p-2 rounded"
              />
              <button onClick={() => removePoint(i, "features")} className="text-red-500">✕</button>
            </div>
          ))}
          <button onClick={() => addPoint("features")} className="text-sm text-primary">+ Add Feature</button>
        </div>

        <input
          name="videoUrl"
          value={formData.videoUrl}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="YouTube Video URL"
        />

        {/* BROCHURE */}
        <div>
          <h3 className="font-semibold text-primaryDark mb-2">Brochure PDF</h3>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileUpload}
            className="w-full border p-2 rounded"
          />
          {formData.brochure && <p className="text-sm text-gray-600 mt-1">Current: {formData.brochure}</p>}
        </div>

        <div className="flex gap-3 pt-4">
          <button
            onClick={handleSave}
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
          >
            Save Changes
          </button>

          <button
            onClick={() => navigate("/admin/productslist")}
            className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}
