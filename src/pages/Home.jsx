import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroCarousel from "../components/HeroCarousel";
import ProductItem from "../components/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import OurClients from "../components/OurClients";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroCarousel />


      {/* ABOUT SECTION */}
      <section className="py-10 ">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div>
              {/* SEO H2 */}
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary leading-tight">
                Trusted Water & Wastewater Treatment Company in Ahmedabad
              </h2>

              {/* SEO PARAGRAPH */}
              <p className="mt-6 text-gray-600 font-body leading-relaxed">
                <strong>Sera Water</strong> is a leading water treatment equipment supplier in Ahmedabad,
                specializing in complete solutions for <strong>ETP, STP, and WTP Components</strong>.
                We provide high-quality wastewater treatment equipment including dosing pumps,
                twin and tri lobe blowers, sludge dewatering machines, agitators, MBBR media,
                diffusers, and other essential water treatment components for industrial and
                commercial applications.
              </p>

              <p className="mt-4 text-gray-600 font-body leading-relaxed">
                As a reliable <strong>wastewater treatment solutions provider in Gujarat</strong>,
                we serve chemical, pharmaceutical, textile, and manufacturing industries with
                efficient, durable, and cost-effective water treatment systems designed to meet
                environmental compliance and operational efficiency.
              </p>

              <h2 className="mt-6 text-3xl font-bold text-primaryDark">Key Features :</h2>

              {/* KEY POINTS */}
              <ul className="mt-4 space-y-3 text-gray-700 font-body">
                <li>✔ Complete ETP, STP & WTP equipment supply</li>
                <li>✔ Industry-specific wastewater treatment solutions</li>
                <li>✔ Energy-efficient & low-maintenance systems</li>
                <li>✔ Trusted supplier for industrial water treatment in Gujarat</li>
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="/about"
                  className="inline-block bg-primary text-white px-6 py-3 rounded font-heading font-semibold hover:bg-primaryLight transition"
                >
                  Know More About Us
                </a>
              </div>
            </div>

            {/* RIGHT HIGHLIGHTS */}
            <div>

              {/* IMAGE */}
              <div className="mb-6 overflow-hidden rounded-lg sm:hidden lg:block">
                <img
                  src="/images/home/sera-about-section.png"
                  alt="Why Choose Sera Water - Water Treatment Equipment Supplier in Ahmedabad"
                  className="w-full h-[300px] md:h-[450px] object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="bg-gray-50 p-4 md:p-10 md:py-4 rounded-xl shadow-sm">
                <h3 className="text-2xl font-heading font-semibold text-primaryDark mb-6">
                  Why Choose Sera Water?
                </h3>

                <div className="space-y-3 text-gray-600 font-body">
                  <p>✔ Over a decade of experience in water and wastewater treatment solutions</p>
                  <p>✔ Wide range of ETP, STP & WTP equipment under one roof</p>
                  <p>✔ Customized solutions for industrial wastewater treatment</p>
                  <p>✔ Strong focus on quality, reliability, and after-sales support</p>
                  <p>✔ Serving clients across Ahmedabad and Gujarat</p>
                </div>
              </div>

            </div>


          </div>

        </div>
      </section>



      {/* PRODUCTS SECTION */}
      <section className="py-16  ">
        <div className="max-w-7xl mx-auto px-6">

          {/* SECTION HEADING */}
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary mb-4">Our Product Range</h2>
            <p className="text-xl text-textGray">
              Water & Wastewater Treatment Equipment Supplier in Ahmedabad
            </p>

          </div>


          {/* PRODUCTS SWIPER */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={24}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <ProductItem
                title="Blowers"
                image="/images/products/air-blower.png"
                link="/products/water-handling/air-blowers"
                description="High-performance industrial blowers for aeration and wastewater treatment applications."
              />

            </SwiperSlide>

          

            <SwiperSlide>
              <ProductItem
                title="Tubular Diffusers"
                image="/images/products/tubular-diffusers.jpg"
                link="/products/water-treatment/tubular-diffusers"
                description="High-efficiency tubular diffusers designed for uniform air distribution in wastewater treatment systems."
              />

            </SwiperSlide>

            <SwiperSlide>
              <ProductItem
                title="Hydraulic Pump"
                image="/images/products/hydraulic-actuated-pump.png"
                link="/products/dosingpump-agitators"
                description="High-precision hydraulic diaphragm dosing pumps designed for accurate chemical dosing in industrial applications."
              />

            </SwiperSlide>

            <SwiperSlide>
              <ProductItem
                title="RO Vessels"
                image="/images/products/vessel.jpg"
                link="/products/ro-components/vessels"
                description="High-pressure RO vessels designed for reliable membrane housing in water purification systems."
              />

            </SwiperSlide>

            <SwiperSlide>
              <ProductItem
                title="Industrial Agitator & Mixer"
                image="/images/products/agitator-mixer.png"
                link="/products/dosingpump-agitators/industrial-agitator-mixer"
                description="High-performance industrial agitators and mixers designed for efficient mixing, blending, and agitation in water and wastewater treatment processes."
              />

            </SwiperSlide>
          </Swiper>

        </div>
      </section>


      {/* INDUSTRIES WE SERVE */}
      <section className="py-10 ">
        <div className="max-w-7xl mx-auto px-6">

          {/* SECTION HEADING */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Industries We Serve
            </h2>
            <p className="mt-4 text-gray-600 font-body max-w-3xl mx-auto">
              Sera Water provides reliable water and wastewater treatment solutions
              for a wide range of industries. Our ETP, STP and WTP equipment is designed
              to meet industry-specific requirements, environmental regulations and
              operational efficiency.
            </p>
          </div>

          {/* INDUSTRY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CHEMICAL INDUSTRY */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-primary transition overflow-hidden">
              <div className="h-40 w-full overflow-hidden">
                <img
                  src="/images/industries/chemical.jpg"
                  alt="Wastewater Treatment Solutions for Chemical Industry"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-heading font-semibold text-darkGray group-hover:text-primary mb-3">
                  Chemical Industry
                </h3>
                <p className="text-gray-600 font-body">
                  Wastewater treatment solutions for chemical manufacturing units,
                  including ETP equipment, dosing pumps, agitators and sludge
                  dewatering systems.
                </p>
              </div>
            </div>

            {/* PHARMACEUTICAL INDUSTRY */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-primary transition overflow-hidden">
              <div className="h-40 w-full overflow-hidden">
                <img
                  src="/images/industries/pharma.jpg"
                  alt="Water Treatment for Pharmaceutical Industry"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-heading font-semibold text-darkGray group-hover:text-primary mb-3">
                  Pharmaceutical Industry
                </h3>
                <p className="text-gray-600 font-body">
                  Advanced water and wastewater treatment systems for pharmaceutical
                  plants to ensure compliance, purity and efficient effluent handling.
                </p>
              </div>
            </div>

            {/* TEXTILE INDUSTRY */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-primary transition overflow-hidden">
              <div className="h-40 w-full overflow-hidden">
                <img
                  src="/images/industries/textile.jpg"
                  alt="ETP Solutions for Textile Industry"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-heading font-semibold text-darkGray group-hover:text-primary mb-3">
                  Textile Industry
                </h3>
                <p className="text-gray-600 font-body">
                  Complete ETP solutions for textile processing units including
                  aeration systems, blowers, diffusers and sludge dewatering machines.
                </p>
              </div>
            </div>

            {/* MANUFACTURING UNITS */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-primary transition overflow-hidden">
              <div className="h-40 w-full overflow-hidden">
                <img
                  src="/images/industries/manufacturing.jpg"
                  alt="Industrial Wastewater Treatment for Manufacturing Units"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-heading font-semibold text-darkGray group-hover:text-primary mb-3">
                  Manufacturing Units
                </h3>
                <p className="text-gray-600 font-body">
                  Industrial wastewater treatment equipment for manufacturing plants
                  to manage process water and effluent discharge effectively.
                </p>
              </div>
            </div>

            {/* COMMERCIAL & RESIDENTIAL */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-primary transition overflow-hidden">
              <div className="h-40 w-full overflow-hidden">
                <img
                  src="/images/industries/residental.jpg"
                  alt="STP Solutions for Commercial and Residential Projects"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-heading font-semibold text-darkGray group-hover:text-primary mb-3">
                  Commercial & Residential Projects
                </h3>
                <p className="text-gray-600 font-body">
                  STP systems and sewage treatment solutions for commercial buildings,
                  residential societies, hotels and infrastructure projects.
                </p>
              </div>
            </div>

            {/* FOOD & BEVERAGE */}
            <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-primary transition overflow-hidden">
              <div className="h-40 w-full overflow-hidden">
                <img
                  src="/images/industries/food.jpg"
                  alt="Water Treatment Solutions for Food and Beverage Industry"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-heading font-semibold text-darkGray group-hover:text-primary mb-3">
                  Food & Beverage Industry
                </h3>
                <p className="text-gray-600 font-body">
                  Water treatment and effluent management solutions for food and
                  beverage processing units to maintain hygiene and compliance.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      <OurClients />

      <Testimonials />

      <ContactCTA />



      <Footer />



    </>
  );
}
