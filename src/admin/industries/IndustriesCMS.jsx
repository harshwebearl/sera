import { useNavigate } from "react-router-dom";

export default function IndustriesCMS() {
  const navigate = useNavigate();

  const industries = [
    {
      id: 1,
      title: "Chemical Industry",
      description:
        "Wastewater treatment solutions for chemical manufacturing including ETP systems, dosing pumps and sludge dewatering.",
      image: "/images/industries/chemical.jpg",
    },
    {
      id: 2,
      title: "Pharmaceutical Industry",
      description:
        "Advanced water and wastewater treatment solutions for pharmaceutical plants ensuring compliance and quality.",
      image: "/images/industries/pharma.jpg",
    },
    {
      id: 3,
      title: "Textile Industry",
      description:
        "Complete ETP solutions for textile processing including aeration, blowers and sludge handling.",
      image: "/images/industries/textile.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto md:p-6 space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-start md:items-center gap-2 flex-col md:flex-row">
        <h1 className="text-2xl font-bold text-primaryDark">Industries We Serve</h1>
        <button  onClick={() => navigate("/admin/createindustry")} className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark">
          + Add Industry
        </button>
      </div>

      {/* LIST */}
      <div className="grid md:grid-cols-3 gap-6">
        {industries.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-md hover:shadow-primary transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover rounded-t-xl"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">
                {item.description}
              </p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => navigate(`/admin/industriescms/edit/${item.id}`)}
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-primaryDark"
                >
                  Edit
                </button>

                <button className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
