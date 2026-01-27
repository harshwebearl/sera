import { useNavigate } from "react-router-dom";
import {
   FaTint, 
  FaFire, 
  FaRecycle, 
  FaBookOpen, 
  FaPills, 
  FaBeer, 
  FaDna, 
  FaLeaf 
} from "react-icons/fa";


export default function IndustriesCMS() {
  const navigate = useNavigate();
    const industries = [
      {
        title: "Water & Waste Water",
        icon: <FaTint />,
      },
      {
        title: "Oil & Gas Industry",
          icon: <FaFire />,
      },
      {
        title: "Environmental & Energy",
        icon: <FaRecycle />,
      },
      {
        title: "Pulp & Paper Industry",
        icon: <FaBookOpen />,
      },
      {
        title: "Sugar & Pharma Industries",
         icon: <FaPills />,
      },
      {
        title: "Winery, Brewery Industries Additive injection",
      icon: <FaBeer />,
      },
      {
        title: "Life sciences & biotechnologies Industries",
        icon: <FaDna />,
      },
      {
        title: "Production of Biofuels",
        icon: <FaLeaf />,
      },
      
    ];
  

  return (
    <div className="max-w-7xl mx-auto md:p-6 space-y-6">
      <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-3">
        <h1 className="text-2xl font-bold text-primaryDark">
          Industries We Serve
        </h1>

        <button
          onClick={() => navigate("/admin/createindustry")}
          className="bg-primary text-white px-6 py-2 rounded"
        >
          + Add Industry
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {industries.map((item) => {
          // const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="bg-white border rounded-xl p-6 text-center text-white"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-[#3b4b4c] flex items-center justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold text-primary">{item.title}</h3>

              <div className="flex justify-center gap-3 mt-4">
                <button
                  onClick={() =>
                    navigate(`/admin/industriescms/edit/${item.id}`)
                  }
                  className="px-4 py-1 bg-primary text-white rounded"
                >
                  Edit
                </button>

                <button className="px-4 py-1 border border-red-400 text-red-400 rounded">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
