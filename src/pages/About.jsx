import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactCTA from '../components/ContactCTA'
import CapabilitiesSlider from '../components/CapabilitiesSlider'
import OurJourney from '../components/OurJourney'
import WhyChoose from '../components/WhyChoose'
import MissionVision from '../components/MissionVision'

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

     <MissionVision />

      <WhyChoose />



      <OurJourney />

      <CapabilitiesSlider />


      {/* CONTACT CTA */}
      <ContactCTA />



      <Footer />

    </>
  )
}

export default About