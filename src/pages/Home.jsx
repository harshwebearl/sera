import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroCarousel from "../components/HeroCarousel";
import ProductSection from "../components/ProductSection";

import "swiper/css";
import "swiper/css/navigation";
import OurClients from "../components/OurClients";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import Industries from "../components/Industries";
import WhyChoose from "../components/WhyChoose";

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

       
    {/* product section */}
    <ProductSection />





      {/* INDUSTRIES WE SERVE */}
      <Industries />

      <OurClients />

      <WhyChoose  />


      

      <Testimonials />

      <ContactCTA />



      <Footer />



    </>
  );
}
