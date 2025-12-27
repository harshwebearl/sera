import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function CapabilitiesSlider() {
  const capabilities = [
    {
      icon: "💧",
      title: "ETP, STP & WTP Equipment Supply",
      desc: "Complete supply of high-quality equipment for Effluent Treatment Plants, Sewage Treatment Plants and Water Treatment Plants designed for industrial wastewater management.",
    },
    {
      icon: "🏭",
      title: "Industrial Wastewater Treatment",
      desc: "Customized wastewater treatment for chemical, pharmaceutical, textile and manufacturing industries to meet discharge norms and environmental compliance.",
    },
    {
      icon: "🌀",
      title: "Sludge Dewatering Systems",
      desc: "Efficient sludge dewatering solutions to reduce sludge volume, improve handling efficiency and lower disposal costs in ETP and STP plants.",
    },
    {
      icon: "⚙️",
      title: "Blowers, Pumps & Aeration Systems",
      desc: "Supply of energy-efficient blowers, dosing pumps and aeration systems designed for reliable performance in wastewater treatment applications.",
    },
    {
      icon: "🧪",
      title: "Customized Water Treatment Solutions",
      desc: "Tailor-made water treatment plant solutions designed based on wastewater characteristics, industry type and operational requirements.",
    },
    {
      icon: "🛠️",
      title: "Installation, AMC & Maintenance",
      desc: "Professional installation support, annual maintenance contracts (AMC) and after-sales services to ensure long-term system performance.",
    },
  ];

  return (
    <section className="py-10 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            Our Capabilities
          </h2>
          <p className="mt-4 text-gray-600 font-body max-w-3xl mx-auto">
            Sera Water delivers comprehensive water and wastewater treatment
            capabilities, providing reliable ETP, STP and WTP solutions for
            industrial and commercial applications across Ahmedabad and Gujarat.
          </p>
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          
        >
          {capabilities.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md hover:shadow-primary transition text-center h-full"
              >
                <div className="text-primary text-4xl mb-5">
                  {item.icon}
                </div>

                <h3 className="font-heading font-semibold text-darkGray group-hover:text-primary mb-3 h-30px]">
                  {item.title}
                </h3>

                <p className="text-gray-600 font-body text-sm leading-relaxed h-[100px]">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
