import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddProduct() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        category: "",
        slug: "",
        name: "",
        shortDesc: "",
        description: "",
        videoUrl: "",
        brochure: "",
        applications: [""],
        features: [""],
        image: "",
    });

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

    const handleSubmit = () => {
        console.log("New Product Data:", formData);
        alert("Product added (static demo)");
        navigate("/admin/productslist");
    };

    return (
        <section className="max-w-5xl mx-auto p-6 bg-white shadow rounded">
            <h1 className="text-2xl font-bold text-primaryDark mb-6">
                Add New Product
            </h1>

            <div className="space-y-4">

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
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    placeholder="Product Slug (e.g. blower-machine)"
                />

                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    placeholder="Product Name"
                />

                <div>
                    <h3 className="font-semibold text-primaryDark">Product Image</h3>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                            setFormData({ ...formData, image: e.target.files[0]?.name || "" })
                        }
                        className="w-full border p-2 rounded"
                    />
                    {formData.image && (
                        <p className="text-sm text-gray-600 mt-1">Selected: {formData.image}</p>
                    )}
                </div>


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

                <input
                    name="videoUrl"
                    value={formData.videoUrl}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    placeholder="YouTube Video URL"
                />

                {/* APPLICATIONS */}
                <div>
                    <h3 className="font-semibold text-primaryDark">Applications</h3>
                    {formData.applications.map((app, i) => (
                        <div key={i} className="flex gap-2 mb-2">
                            <input
                                value={app}
                                onChange={(e) =>
                                    handleArrayChange(i, "applications", e.target.value)
                                }
                                className="w-full border p-2 rounded"
                            />
                            <button
                                onClick={() => removePoint(i, "applications")}
                                className="text-red-500"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={() => addPoint("applications")}
                        className="text-primary text-sm"
                    >
                        + Add Application
                    </button>
                </div>

                {/* FEATURES */}
                <div>
                    <h3 className="font-semibold text-primaryDark">Key Features</h3>
                    {formData.features.map((f, i) => (
                        <div key={i} className="flex gap-2 mb-2">
                            <input
                                value={f}
                                onChange={(e) =>
                                    handleArrayChange(i, "features", e.target.value)
                                }
                                className="w-full border p-2 rounded"
                            />
                            <button
                                onClick={() => removePoint(i, "features")}
                                className="text-red-500"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={() => addPoint("features")}
                        className="text-primary text-sm"
                    >
                        + Add Feature
                    </button>
                </div>

                {/* BROCHURE */}
                <div>
                    <h3 className="font-semibold text-primaryDark">Brochure PDF</h3>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileUpload}
                        className="w-full border p-2 rounded"
                    />
                </div>

                <div className="flex gap-3 pt-6">
                    <button
                        onClick={handleSubmit}
                        className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
                    >
                        Add Product
                    </button>

                    <button
                        onClick={() => navigate("/admin/productslist")}
                        className="border px-6 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </section>
    );
}
