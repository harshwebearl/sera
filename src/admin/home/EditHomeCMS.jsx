import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditHomeCMS() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        hero: [
            { title: "", subtitle: "", description: "", image: null, bgImage: null },
            { title: "", subtitle: "", description: "", image: null, bgImage: null },
            { title: "", subtitle: "", description: "", image: null, bgImage: null },
        ],
        about: {
            title: "",
            description1: "",
            description2: "",
            image: null,
        },
        features: ["", "", "", ""],
        whyChoose: ["", "", "", ""],
    });

    const handleHeroChange = (index, field, value) => {
        const updated = [...data.hero];
        updated[index][field] = value;
        setData({ ...data, hero: updated });
    };

    const handleImageChange = (section, index, field, file) => {
        if (section === "hero") {
            const updated = [...data.hero];
            updated[index][field] = file;
            setData({ ...data, hero: updated });
        }

        if (section === "about") {
            setData({
                ...data,
                about: { ...data.about, image: file },
            });
        }
    };


    const handleSave = () => {
        console.log("Updated Home Page Data:", data);
        alert("Home page updated successfully!");
    };

    return (
        <div className="max-w-7xl mx-auto md:p-6 space-y-6">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-primaryDark">Edit Home Page</h1>
                <button
                    onClick={() => navigate("/admin/homecms")}
                    className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
                >
                    Back
                </button>
            </div>

            {/* ================= HERO SECTION ================= */}
            <section className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-4 text-primaryDark">Hero Section</h2>

                {data.hero.map((item, index) => (
                    <div key={index} className="border rounded-lg p-6 mb-6">

                        <h3 className="font-semibold mb-4 text-dark/70">Slide {index + 1}</h3>

                        <div className="flex justify-between items-center flex-col md:flex-row gap-3">
                            {/* TITLE */}
                            <input
                                className="input mb-2 border border-primaryDark/30 p-1 w-full"
                                placeholder="Title"
                                value={item.title}
                                onChange={(e) =>
                                    handleHeroChange(index, "title", e.target.value)
                                }
                            />

                            {/* SUBTITLE */}
                            <input
                                className="input mb-2 border border-primaryDark/30 p-1 w-full"
                                placeholder="Subtitle"
                                value={item.subtitle}
                                onChange={(e) =>
                                    handleHeroChange(index, "subtitle", e.target.value)
                                }
                            />

                            {/* DESCRIPTION */}
                            <textarea
                                className="input mb-3 border border-primaryDar/30 p-1 w-full"
                                placeholder="Description"
                                value={item.description}
                                onChange={(e) =>
                                    handleHeroChange(index, "description", e.target.value)
                                }
                            />

                        </div>

                        {/* PRODUCT IMAGE */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Product Image
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                    handleHeroChange(index, "image", e.target.files[0])
                                }
                                className="w-[200px] md:w-full"
                            />

                            {item.image && (
                                <img
                                    src={URL.createObjectURL(item.image)}
                                    className="h-28 mt-2 rounded object-cover"
                                    alt="Product Preview"
                                />
                            )}
                        </div>

                        {/* BACKGROUND IMAGE */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Background Image
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                    handleHeroChange(index, "bgImage", e.target.files[0])
                                }
                                className="w-[200px] md:w-full"
                            />

                            {item.bgImage && (
                                <img
                                    src={URL.createObjectURL(item.bgImage)}
                                    className="h-28 mt-2 rounded object-cover"
                                    alt="Background Preview"
                                />
                            )}
                        </div>
                    </div>
                ))}

            </section>

            {/* ABOUT SECTION */}
            <section className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-4 text-primaryDark">About Section</h2>

                <div className="flex justify-between items-center flex-col md:flex-row gap-3">
                    <input
                        className="input mb-3 border border-primaryDark/30 p-1 w-full"
                        placeholder="Title"
                        value={data.about.title}
                        onChange={(e) =>
                            setData({ ...data, about: { ...data.about, title: e.target.value } })
                        }
                    />

                    <textarea
                        className="input mb-3 border border-primaryDark/30 p-1 w-full"
                        placeholder="Description 1"
                        value={data.about.description1}
                        onChange={(e) =>
                            setData({
                                ...data,
                                about: { ...data.about, description1: e.target.value },
                            })
                        }
                    />

                    <textarea
                        className="input mb-3 border border-primaryDark/30 p-1 w-full"
                        placeholder="Description 2"
                        value={data.about.description2}
                        onChange={(e) =>
                            setData({
                                ...data,
                                about: { ...data.about, description2: e.target.value },
                            })
                        }
                    />
                </div>

                <div className="mt-4">
                    <label className="block font-medium mb-1">About Section Image</label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                            handleImageChange("about", null, null, e.target.files[0])
                        }
                        className="w-[200px] md:w-full "
                    />

                    {data.about.image && (
                        <img
                            src={URL.createObjectURL(data.about.image)}
                            className="mt-3 h-40 rounded object-cover"
                            alt="About Preview"
                        />
                    )}
                </div>

            </section>

            {/* FEATURES */}
            <section className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                {data.features.map((feature, index) => (
                    <input
                        key={index}
                        className="input mb-3 border border-primaryDark/30 p-1 w-full"
                        value={feature}
                        placeholder="Key Features"
                        onChange={(e) => {
                            const updated = [...data.features];
                            updated[index] = e.target.value;
                            setData({ ...data, features: updated });
                        }}
                    />
                ))}
            </section>

            {/* WHY CHOOSE */}
            <section className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-4">Why Choose Us</h2>
                {data.whyChoose.map((item, index) => (
                    <input
                        key={index}
                        className="input mb-3 border border-primaryDark/30 p-1 w-full"
                        value={item}
                        placeholder="Why Choose Us Points"
                        onChange={(e) => {
                            const updated = [...data.whyChoose];
                            updated[index] = e.target.value;
                            setData({ ...data, whyChoose: updated });
                        }}
                    />
                ))}
            </section>
            <button
                onClick={handleSave}
                className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
            >
                Save Changes
            </button>
        </div>
    );
}
