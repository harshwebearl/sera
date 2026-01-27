import { useNavigate } from "react-router-dom";
import { addresses } from "../../../data/addresses";

export default function AdminAddresses() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-1">
      <div className="flex justify-between flex-col md:flex-row items-start gap-3 md:items-center mb-6">
        <h1 className="text-2xl font-bold text-primary">Office Addresses</h1>
        <button
          onClick={() => navigate("/admin/addresses/add")}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          + Add New Address
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {addresses.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded shadow">
            <h3 className="text-lg font-semibold text-primary">{item.city}</h3>
            <p className="text-gray-600 mt-2">{item.address}</p>
            <p className="text-sm mt-2">📞 {item.phone}</p>

            <button
              onClick={() => navigate(`/admin/addresses/edit/${item.id}`)}
              className="mt-3 text-primary underline"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
