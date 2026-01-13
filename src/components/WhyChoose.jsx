import React from 'react'

const WhyChoose = () => {
  return (
      <section
        className="relative bg-fixed bg-center bg-cover py-24"
        style={{
          backgroundImage: "url('/images/about/whychoose-bg.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/90"></div>

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
                🛠️
              </div>
              <h4 className="text-lg font-semibold mb-2">Technical Support</h4>
              <p className="text-gray-300 text-sm">
                Expert engineers providing dependable technical guidance and service.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-400 text-black text-2xl">
                🏅
              </div>
              <h4 className="text-lg font-semibold mb-2">ISO Certified</h4>
              <p className="text-gray-300 text-sm">
                International quality standards with proven reliability.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-400 text-black text-2xl">
                📈
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
  )
}

export default WhyChoose