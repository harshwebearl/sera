import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddGallery() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // API logic will go here
    console.log({ title, image });

    alert("Gallery item added successfully!");
    navigate("/admin/gallery");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6 text-primaryDark">Add Gallery Image</h2>

      <label className="block mb-2 font-medium">Image Title</label>
      <input
        type="text"
        className="input mb-4  border border-primaryDark/30 p-1 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter image title"
      />

      <label className="block mb-2 font-medium">Upload Image</label>
      <input
        type="file"
        className="mb-4 w-[200px] md:w-full"
        onChange={handleImageChange}
      />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="h-48 rounded mb-4 object-cover"
        />
      )}

      <div className="flex gap-4">
        <button
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
          onClick={handleSubmit}
        >
          Save
        </button>

        <button
          onClick={() => navigate(-1)}
          className="border px-6 py-2 rounded hover:bg-primaryDark hover:text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
