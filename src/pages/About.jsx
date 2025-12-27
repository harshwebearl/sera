import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactCTA from '../components/ContactCTA'
import CapabilitiesSlider from '../components/CapabilitiesSlider'
import OurJourney from '../components/OurJourney'

const About = () => {
  return (
    <>
      <Navbar />

      <div className='bg-dark'>
        <Breadcrumb />
      </div>

      {/* ABOUT INTRO */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-up">
            <h1 className="text-2xl md:text-4xl font-heading font-bold text-primary">
              About Sera Water – Water & Wastewater Treatment Company in Ahmedabad
            </h1>

            <p className="mt-6 text-gray-600 font-body leading-relaxed">
              <strong>Sera Water</strong> is a trusted <strong>water treatment and wastewater
                treatment company in Ahmedabad, Gujarat</strong>, specializing in the
              supply of high-quality equipment and solutions for
              <strong> ETP (Effluent Treatment Plants), STP (Sewage Treatment Plants)
                and WTP (Water Treatment Plants)</strong>.
            </p>

            <p className="mt-4 text-gray-600 font-body leading-relaxed">
              We offer a comprehensive range of <strong>industrial water treatment
                equipment</strong> including dosing pumps, twin & tri lobe blowers,
              sludge dewatering machines, agitators, MBBR media, diffusers,
              screw pumps and filtration systems. Our solutions are engineered
              for reliability, environmental compliance and long-term operational
              efficiency.
            </p>

            <p className="mt-4 text-gray-600 font-body leading-relaxed">
              With a strong presence across <strong>Ahmedabad and Gujarat</strong>,
              Sera Water supports industries in achieving effective wastewater
              management while meeting environmental regulations and sustainability
              goals.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-lg" data-aos="fade-up">
            <img
              src="/images/about/about-sera-water.png"
              alt="Sera Water - Water Treatment Equipment Supplier in Ahmedabad"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* EXPERIENCE & EXPERTISE */}
      <section className="py-10 " data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">
            Experience & Expertise in Industrial Water Treatment
          </h2>

          <p className="text-gray-600 font-body leading-relaxed ">
            With years of experience in the <strong>industrial water and wastewater
              treatment sector</strong>, Sera Water has built a reputation as a
            reliable <strong>ETP STP WTP equipment supplier</strong> serving
            chemical, pharmaceutical, textile, manufacturing, food & beverage
            and commercial industries. Our technical expertise enables us to
            deliver customized water treatment solutions designed for specific
            wastewater characteristics, optimized energy consumption and reduced
            maintenance costs.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-10 ">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* VISION */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:bg-primary/5" data-aos="fade-up">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 font-body leading-relaxed">
              To become a leading <strong>water treatment solutions provider in India</strong>
              by delivering innovative, sustainable and cost-effective wastewater
              treatment systems that protect the environment and support industrial growth.
            </p>
          </div>

          {/* MISSION */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:bg-primary/5" data-aos="fade-up">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 font-body leading-relaxed">
              To supply <strong>high-performance water treatment equipment</strong> and
              provide reliable <strong>ETP, STP and WTP solutions</strong> that help
              industries achieve environmental compliance, operational efficiency
              and long-term sustainability.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
  className="relative bg-fixed bg-center bg-cover py-24"
  style={{
    backgroundImage: "url('/images/about/whychoose-bg.png')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/80"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-semibold font-heading">
        Why Choose Us
      </h2>
      <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
        Trusted by industries for reliable, efficient and high-performance water
        and wastewater treatment solutions.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Card 1 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-400 text-black text-2xl">
          ⚙️
        </div>
        <h4 className="text-lg font-semibold mb-2">Technical Support</h4>
        <p className="text-gray-300 text-sm">
          Expert engineers providing dependable technical guidance and service.
        </p>
      </div>

      {/* Card 2 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-400 text-black text-2xl">
          ✔
        </div>
        <h4 className="text-lg font-semibold mb-2">ISO Certified</h4>
        <p className="text-gray-300 text-sm">
          International quality standards with proven reliability.
        </p>
      </div>

      {/* Card 3 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-400 text-black text-2xl">
          📊
        </div>
        <h4 className="text-lg font-semibold mb-2">Extensive Experience</h4>
        <p className="text-gray-300 text-sm">
          Decades of experience across industrial water solutions.
        </p>
      </div>

      {/* Card 4 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-400 text-black text-2xl">
          🤝
        </div>
        <h4 className="text-lg font-semibold mb-2">Reliable Support</h4>
        <p className="text-gray-300 text-sm">
          End-to-end assistance and long-term partnership commitment.
        </p>
      </div>

    </div>
  </div>
</section>



<OurJourney />

      <CapabilitiesSlider />


      {/* CONTACT CTA */}
      <ContactCTA />



      <Footer />

    </>
  )
}

export default About