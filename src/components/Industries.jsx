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

export default function Industries() {
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
    <section className="bg-[#4b5b5c] py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-12">
          Industries We Serve
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-[#5c6b6b] rounded-xl py-6 px-6 flex flex-col items-center text-center transition hover:bg-[#687979] border border-white"
            >
              {/* ICON */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#4e5d5d] mb-6">
                <span className="text-yellow-400 text-4xl">
                  {item.icon}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-white text-lg font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
