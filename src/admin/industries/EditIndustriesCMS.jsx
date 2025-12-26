import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditIndustriesCMS() {
  const { id } = useParams();

  const navigate = useNavigate()

  const [data, setData] = useState({
    title: "Chemical Industry",
    description:
      "Wastewater treatment solutions for chemical manufacturing including ETP systems.",
    image: "",
  });

  return (
    <div className="max-w-4xl mx-auto md:p-6">
      {/* <h1 className="text-2xl font-bold mb-6 text-primaryDark"></h1> */}
      {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-primaryDark">Edit Industry</h1>
                <button
                    onClick={() => navigate("/admin/industriescms")}
                    className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
                >
                    Back
                </button>
            </div>

      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="block font-medium mb-1">Industry Name</label>
          <input
            className="w-full border p-2 rounded border-primaryDark/30"
            value={data.title}
            onChange={(e) =>
              setData({ ...data, title: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            className="w-full border p-2 rounded border-primaryDark/30"
            rows="4"
            value={data.description}
            onChange={(e) =>
              setData({ ...data, description: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Image</label>
          <input
            type="file"
            className="w-full "
            onChange={(e) =>
              setData({ ...data, image: e.target.files[0] })
            }
          />
        </div>

        <button className="bg-primary text-white px-6 py-2 rounded mt-4 hover:bg-primaryDark">
          Save Changes
        </button>
      </div>
    </div>
  );
}
