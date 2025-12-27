import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


export default function OurClients() {
  const clients = [
    { name: "Amul", logo: "/images/clients/amul.jpg" },
    { name: "Britannia", logo: "/images/clients/britannia.jpg" },
    { name: "Cocacola", logo: "/images/clients/cocacola.jpg" },
    { name: "JK Paper", logo: "/images/clients/JK-Paper.jpg" },
    { name: "Nayara", logo: "/images/clients/nayara.jpg" },
    { name: "Oicl", logo: "/images/clients/oicl.jpg" },
    { name: "Reliance", logo: "/images/clients/reliance.jpg" },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            Our Clients
          </h2>
          <p className="mt-4 text-gray-600 font-body max-w-2xl mx-auto">
            Trusted by leading industries across Ahmedabad and Gujarat for
            reliable water and wastewater treatment solutions.
          </p>
        </div>

        {/* CLIENTS SWIPER */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-28 bg-white rounded-xl shadow-sm hover:shadow-lg transition group cursor-pointer">
                
                <img
                  src={client.logo}
                  alt={client.name}
                  className="
                    h-[140px] w-[140px]
                    object-contain
                    grayscale
                    opacity-70
                    transition-all
                    duration-300
                    group-hover:grayscale-0
                    group-hover:opacity-100
                    group-hover:scale-105
                  "
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
