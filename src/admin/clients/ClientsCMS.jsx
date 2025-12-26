import { useNavigate } from "react-router-dom";

export default function ClientsCMS() {
  const navigate = useNavigate();

  const clients = [
    {
      id: 1,
      name: "Nayara Energy",
      logo: "/images/clients/nayara.jpg",
    },
    {
      id: 2,
      name: "Indian Oil",
      logo: "/images/clients/oicl.jpg",
    },
    {
      id: 3,
      name: "Reliance",
      logo: "/images/clients/reliance.jpg",
    },
    {
      id: 4,
      name: "Amul",
      logo: "/images/clients/amul.jpg",
    },
    {
      id: 5,
      name: "Britannia",
      logo: "/images/clients/britannia.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto md:p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-primaryDark">Our Clients</h1>
        <button
          onClick={() => navigate("/admin/addclient")}
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
        >
          + Add Client
        </button>
      </div>

      {/* CLIENT GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md hover:shadow-primary transition text-center"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-20 mx-auto object-contain"
            />

            <p className="mt-3 font-semibold">{client.name}</p>

            <div className="flex justify-center gap-3 mt-3">
              
              <button className="text-sm px-4 py-1 border border-red-500 text-red-600 hover:text-white transition hover:bg-red-500 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
