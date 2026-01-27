import { useState } from "react";

export default function OurJourneyCMS() {
  const [steps, setSteps] = useState([
    {
      year: "2015",
      title: "Company Founded",
      desc: "Started with a vision to deliver quality water solutions.",
    },
    {
      year: "2018",
      title: "Expansion",
      desc: "Expanded services across industrial sectors.",
    },
    {
      year: "2022",
      title: "Technology Upgrade",
      desc: "Introduced advanced treatment and automation systems.",
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...steps];
    updated[index][field] = value;
    setSteps(updated);
  };

  const addStep = () => {
    setSteps([
      ...steps,
      { year: "", title: "", desc: "" },
    ]);
  };

  const removeStep = (index) => {
    const updated = steps.filter((_, i) => i !== index);
    setSteps(updated);
  };

  const handleSave = () => {
    console.log("Copy this array into frontend file:\n", steps);
    alert("Check console and paste into frontend file");
  };

  return (
    <div className="max-w-5xl mx-auto p-1">
      <h1 className="text-2xl font-bold mb-6">Our Journey CMS</h1>

      {steps.map((step, index) => (
        <div key={index} className="border p-4 rounded mb-4 space-y-3">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Year"
              value={step.year}
              onChange={(e) =>
                handleChange(index, "year", e.target.value)
              }
              className="border p-2 rounded w-full"
            />

            <input
              type="text"
              placeholder="Title"
              value={step.title}
              onChange={(e) =>
                handleChange(index, "title", e.target.value)
              }
              className="border p-2 rounded flex-1 w-full"
            />
          </div>

          <textarea
            placeholder="Description"
            value={step.desc}
            onChange={(e) =>
              handleChange(index, "desc", e.target.value)
            }
            className="border p-2 rounded w-full"
          />

          <button
            onClick={() => removeStep(index)}
            className="text-red-500"
          >
            Delete Step
          </button>
        </div>
      ))}

      <div className="flex gap-4 mt-6">
        <button
          onClick={addStep}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Step
        </button>

        <button
          onClick={handleSave}
          className="bg-primary text-white px-6 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}
