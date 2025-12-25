export default function OurJourney() {
  const journey = [
    {
      year: "2018",
      title: "Company Founded",
      desc: "Sera Water was established with a vision to deliver reliable water and wastewater treatment equipment for industrial and commercial applications in Ahmedabad.",
    },
    {
      year: "2019",
      title: "Expansion of Product Range",
      desc: "We expanded our portfolio to include ETP, STP and WTP equipment such as blowers, dosing pumps, agitators and sludge dewatering systems.",
    },
    {
      year: "2021",
      title: "Industrial Projects Across Gujarat",
      desc: "Successfully delivered wastewater treatment solutions to chemical, textile and pharmaceutical industries across Gujarat.",
    },
    {
      year: "2023",
      title: "Advanced Water Treatment Solutions",
      desc: "Introduced customized water treatment plant solutions focused on energy efficiency, compliance and long-term operational performance.",
    },
    {
      year: "2025",
      title: "Trusted Water Treatment Partner",
      desc: "Recognized as a trusted water and wastewater treatment equipment supplier serving multiple industries with strong technical support.",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-white to-primary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            Our Journey
          </h2>
          <p className="mt-4 text-gray-600 font-body max-w-3xl mx-auto">
            Our journey reflects Sera Water’s commitment to delivering dependable
            water and wastewater treatment solutions while growing alongside
            industries across Ahmedabad and Gujarat.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-4xl mx-auto">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>

          {journey.map((item, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* CONTENT CARD */}
              <div className="bg-white p-6 rounded-xl shadow-sm w-full md:w-[45%]">
                <span className="inline-block text-sm font-heading font-semibold text-primary mb-2">
                  {item.year}
                </span>
                <h3 className="text-lg font-heading font-semibold text-darkGray mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* DOT */}
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white absolute left-1/2 transform -translate-x-1/2">
                {index + 1}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
