import React from 'react'

const MissionVision = () => {
  return (
    <>
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
    </>
  )
}

export default MissionVision