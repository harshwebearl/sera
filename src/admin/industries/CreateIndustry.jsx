import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateIndustry() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you will later integrate API call
    console.log("New Industry Data:", formData);

    alert("Industry added successfully!");
    navigate("/admin/industries");
  };

  return (
    <div className="max-w-4xl mx-auto md:p-6">
      <h1 className="text-2xl font-bold mb-6 text-primaryDark">Add New Industry</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-6"
      >
        {/* INDUSTRY NAME */}
        <div>
          <label className="block font-medium mb-1">Industry Name</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter industry name"
            className="w-full border rounded px-4 py-2 border-primaryDark/30"
            required
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter industry description"
            className="w-full border rounded px-4 py-2 border-primaryDark/30"
            required
          />
        </div>

        {/* IMAGE UPLOAD */}
        <div>
          <label className="block font-medium mb-1">Industry Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />

          {formData.image && (
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Preview"
              className="mt-3 h-40 rounded object-cover"
            />
          )}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
          >
            Save Industry
          </button>

          <button
            type="button"
            onClick={() => navigate("/admin/industriescms")}
            className="border px-6 py-2 rounded hover:bg-primaryDark hover:text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
