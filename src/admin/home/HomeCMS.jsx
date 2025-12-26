import { useNavigate } from "react-router-dom";

export default function HomeCMS() {
  const navigate = useNavigate();

  const homeData = {
    hero: [
      {
        title: "Wastewater Treatment Solutions Provider in Gujarat",
        subtitle: "Twin & Tri Lobe Blowers for Aeration Systems",
        description:
          "We supply energy-efficient twin lobe and tri lobe blowers for sewage treatment plants and effluent treatment plants. Our blowers are widely used in industrial wastewater treatment solutions requiring consistent airflow and low power consumption.",
        image: "/images/products/ring-blower.png",
        bgImage: "/images/home/blower-carousel.png",
      },
      {
        title: "Sludge Dewatering Machine Supplier in Ahmedabad",
        subtitle: "Industrial Sludge Dewatering Solutions",
        description:
          "Sera Water is a trusted sludge dewatering machine supplier in Ahmedabad offering efficient sludge dewatering solutions for ETP and STP plants. Our sludge dewatering systems reduce sludge volume, improve handling efficiency, and ensure cost-effective wastewater treatment .",
        image: "/images/products/sludge-dewatering.png",
        bgImage: "/images/home/slugdewatering-carousel.png",
      },

      {
        title: "Acoustic Hood Supplier in Ahmedabad",
        subtitle: "Industrial Noise Control Acoustic Hoods",
        description:
          "Sera Water is a trusted acoustic hood supplier in Ahmedabad providing high-quality noise control enclosures for blowers, pumps and industrial equipment. Our acoustic hoods effectively reduce sound levels, ensure compliance with noise regulations and maintain proper ventilation for ETP, STP and WTP plant applications.",
        image: "/images/products/acoustic-hoods.png",
        bgImage: "/images/home/dosingpump-carousel.png",
      }

    ],
    about: {
      title: " Trusted Water & Wastewater Treatment Company in Ahmedabad",
      description1:
        "<strong>Sera Water</strong> is a leading water treatment equipment supplier in Ahmedabad, specializing in complete solutions for <strong>ETP, STP, and WTP plants</strong>.               We provide high-quality wastewater treatment equipment including dosing pumps,                twin and tri lobe blowers, sludge dewatering machines, agitators, MBBR media,                diffusers, and other essential water treatment components for industrial and                commercial applications.",
      description2:
        "As a reliable <strong>wastewater treatment solutions provider in Gujarat</strong>,we serve chemical, pharmaceutical, textile, and manufacturing industries with efficient, durable, and cost-effective water treatment systems designed to meet environmental compliance and operational efficiency.",
         image: "/images/home/sera-about-section.png",
    },
    features: [
      "Advanced treatment technology",
      "Energy efficient systems",
      "Customized industrial solutions",
      "Reliable after-sales support",
    ],
    whyChoose: [
      "Experienced engineering team",
      "High quality components",
      "Proven industry expertise",
      "End-to-end project execution",
    ],
  };

  return (
    <div className="max-w-7xl mx-auto md:p-6 space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-start gap-2 md:items-center flex-col md:flex-row">
        <h1 className="text-2xl font-bold text-primaryDark">Home Page Content</h1>
        <button
          onClick={() => navigate("/admin/homecms/edit")}
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
        >
          Edit Content
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4 text-primaryDark">Hero Section</h2>

        {homeData.hero.map((slide, i) => (
          <div key={i} className="border-b pb-6 mb-6 space-y-2">
            <h3 className="font-semibold text-lg">{slide.title}</h3>
            <p className="text-primary">{slide.subtitle}</p>
            <p className="text-gray-500 mb-3">{slide.description}</p>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={slide.image}
                alt="Product"
                className="h-32 object-contain rounded"
              />
              <img
                src={slide.bgImage}
                alt="Background"
                className="h-32 object-cover rounded"
              />
            </div>
          </div>
        ))}
      </section>


      {/* ABOUT SECTION */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4 text-primaryDark">About Section</h2>

        <div className="grid md:grid-cols-2 gap-6 items-center">

          {/* TEXT CONTENT */}
          <div className="space-y-3">
            <h3 className="font-semibold">{homeData.about.title}</h3>
            <p className="mt-2">{homeData.about.description1}</p>
            <p className="mt-2">{homeData.about.description2}</p>
          </div>

          {/* IMAGE */}
          <div>
            <img
              src={homeData.about.image}
              alt="About Sera Water"
              className="w-full h-[260px] object-cover rounded-lg"
            />
          </div>

        </div>
      </section>


      {/* KEY FEATURES */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4 text-primaryDark">Key Features</h2>
        <ul className="list-disc ml-6 space-y-2">
          {homeData.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4 text-primaryDark">Why Choose Us</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {homeData.whyChoose.map((item, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg bg-gray-50"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
