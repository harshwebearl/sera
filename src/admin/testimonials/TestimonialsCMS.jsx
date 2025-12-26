import { useNavigate } from "react-router-dom";

export default function Testimonials() {
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Patel",
      message:
        "Sera Water supplied complete ETP equipment and provided excellent after-sales support.",
    },
    {
      id: 2,
      name: "Amit Shah",
      message:
        "We installed twin lobe blowers and dosing systems. Excellent quality and service.",
    },
    {
      id: 3,
      name: "Neha Mehta",
      message:
        "Their wastewater treatment solutions helped us meet compliance standards efficiently.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto md:p-6">
      <div className="flex justify-between items-start md:items-center gap-3 mb-6 flex-col md:flex-row">
        <h1 className="text-2xl font-bold text-primaryDark">Client Testimonials</h1>
        <button
          onClick={() => navigate("/admin/addtestimonial")}
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
        >
          + Add Testimonial
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <p className="text-gray-700 italic mb-4">"{item.message}"</p>
            <h4 className="font-semibold text-primary">{item.name}</h4>

            <div className="flex gap-3 mt-4">
              <button className="text-sm border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-500 hover:text-white transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
