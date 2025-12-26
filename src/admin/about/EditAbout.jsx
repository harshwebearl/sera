import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditAbout() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    hero: {
      title: "",
      description1: "",
      description2: "",
      description3: "",
      image: null,
    },
    experience: {
      title: "",
      description: "",
    },
    missionVision: {
      mission: "",
      vision: "",
    },
    journey: [
      { year: "", title: "", description: "" },
    ],
  });

   const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const updateJourney = (index, field, value) => {
    const updated = [...data.journey];
    updated[index][field] = value;
    setData({ ...data, journey: updated });
  };

  return (
    <div className="max-w-6xl mx-auto md:p-6 space-y-10">

      {/* HEADER */}
      <div className="flex justify-between items-start md:items-center gap-3 flex-col md:flex-row">
        <h1 className="text-2xl font-bold text-primaryDark">Edit About Page</h1>
        <button
          onClick={() => navigate("/admin/aboutcms")}
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
        >
          Back
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="font-semibold mb-4">About Section</h2>

        <input
          className="input mb-3 border border-primaryDark/30 p-1 w-full"
          placeholder="Title"
          value={data.hero.title}
          onChange={(e) =>
            setData({ ...data, hero: { ...data.hero, title: e.target.value } })
          }
        />

        <textarea
          className="input mb-3 border border-primaryDark/30 p-1 w-full"
          placeholder="Description 1"
          value={data.hero.description1}
          onChange={(e) =>
            setData({ ...data, hero: { ...data.hero, description1: e.target.value } })
          }
        />

        <textarea
          className="input mb-3 border border-primaryDark/30 p-1 w-full"
          placeholder="Description 2"
          value={data.hero.description2}
          onChange={(e) =>
            setData({ ...data, hero: { ...data.hero, description2: e.target.value } })
          }
        />

        <textarea
          className="input mb-3 border border-primaryDark/30 p-1 w-full"
          placeholder="Description 3"
          value={data.hero.description3}
          onChange={(e) =>
            setData({ ...data, hero: { ...data.hero, description3: e.target.value } })
          }
        />

        <div className="space-y-3">
      <input
        type="file"
        className="w-full md:w-[250px]"
        accept="image/*"
        onChange={handleImageChange}
      />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mt-3 h-40 w-auto rounded-lg border object-cover"
        />
      )}
    </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="font-semibold mb-4">Experience</h2>
        <input
          className="input mb-3 border border-primaryDark/30 p-1 w-full"
          placeholder="Title"
          value={data.experience.title}
          onChange={(e) =>
            setData({ ...data, experience: { ...data.experience, title: e.target.value } })
          }
        />
        <textarea
          className="input  border border-primaryDark/30 p-1 w-full"
          placeholder="Description"
          value={data.experience.description}
          onChange={(e) =>
            setData({ ...data, experience: { ...data.experience, description: e.target.value } })
          }
        />
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="font-semibold mb-4">Mission & Vision</h2>
        <input
          className="input mb-2 border border-primaryDark/30 p-1 w-full"
          placeholder="Mission"
          value={data.missionVision.mission}
          onChange={(e) =>
            setData({
              ...data,
              missionVision: { ...data.missionVision, mission: e.target.value },
            })
          }
        />
        <input
          className="input border border-primaryDark/30 p-1 w-full"
          placeholder="Vision"
          value={data.missionVision.vision}
          onChange={(e) =>
            setData({
              ...data,
              missionVision: { ...data.missionVision, vision: e.target.value },
            })
          }
        />
      </section>

      {/* JOURNEY */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="font-semibold mb-4">Our Journey</h2>

        {data.journey.map((item, index) => (
          <div key={index} className="border p-4 rounded mb-4">
            <input
              className="input mb-2 border border-primaryDark/30 p-1 w-full"
              placeholder="Year"
              value={item.year}
              onChange={(e) => updateJourney(index, "year", e.target.value)}
            />
            <input
              className="input mb-2 border border-primaryDark/30 p-1 w-full"
              placeholder="Title"
              value={item.title}
              onChange={(e) => updateJourney(index, "title", e.target.value)}
            />
            <textarea
              className="input border border-primaryDark/30 p-1 w-full"
              placeholder="Description"
              value={item.description}
              onChange={(e) => updateJourney(index, "description", e.target.value)}
            />
          </div>
        ))}
      </section>

      <button className="bg-primary text-white px-6 py-3 rounded hover:bg-primaryDark">
        Save All Changes
      </button>
    </div>
  );
}
