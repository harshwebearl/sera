import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddClient() {
  const navigate = useNavigate();

  const [client, setClient] = useState({
    name: "",
    logo: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Send data to backend
    console.log("Client Data:", client);

    alert("Client added successfully!");
    navigate("/admin/clients");
  };

  return (
    <div className="max-w-4xl mx-auto md:p-6">
      <h1 className="text-2xl font-bold mb-6 text-primaryDark">Add New Client</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-6">
        
        {/* CLIENT NAME */}
        <div>
          <label className="block font-medium mb-1">Client Name</label>
          <input
            type="text"
            placeholder="Enter client name"
            className="w-full border px-4 py-2 rounded border-primaryDark/30"
            value={client.name}
            onChange={(e) =>
              setClient({ ...client, name: e.target.value })
            }
          />
        </div>

        {/* CLIENT LOGO */}
        <div>
          <label className="block font-medium mb-1">Client Logo</label>
          <input
            type="file"
            accept="image/*"
            className="w-[200px] md:w-full"
            onChange={(e) =>
              setClient({ ...client, logo: e.target.files[0] })
            }
          />

          {client.logo && (
            <img
              src={URL.createObjectURL(client.logo)}
              alt="Preview"
              className="mt-4 h-24 object-contain"
            />
          )}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleSubmit}
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
          >
            Save Client
          </button>

          <button
            onClick={() => navigate("/admin/clientscms")}
            className="border px-6 py-2 rounded hover:bg-primaryDark hover:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
