import { useNavigate } from "react-router-dom";

export default function AboutCMS() {
  const navigate = useNavigate();

  const aboutData = {
    hero: {
      title: "About Sera Water",
      description1: "Leading water and wastewater treatment solutions provider.",
      description2: "Delivering sustainable, reliable, and efficient solutions.",
      description3: "cscs Delivering sustainable, reliable, and efficient solutions.",
      image: "/images/about/hero.jpg",
    },
    experience: {
      title: "Years of Industry Experience",
      description:
        "With decades of experience, we provide end-to-end water treatment solutions across industries.",
    },
    missionVision: {
      mission: "To deliver innovative and sustainable water treatment solutions.",
      vision: "To become a trusted global leader in water and wastewater management.",
    },
    journey: [
      {
        year: "2015",
        title: "Company Founded",
        description: "Started with a vision to deliver quality water solutions.",
      },
      {
        year: "2018",
        title: "Expansion",
        description: "Expanded services across industrial sectors.",
      },
      {
        year: "2022",
        title: "Technology Upgrade",
        description: "Introduced advanced treatment and automation systems.",
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto md:p-6 space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-start md:items-center gap-3 flex-col md:flex-row">
        <h1 className="text-2xl font-bold text-primaryDark">About Page Content</h1>
        <button
          onClick={() => navigate("/admin/editabout")}
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryDark"
        >
          Edit Content
        </button>
      </div>

      {/* ABOUT HERO */}
      <section className="bg-white p-6 rounded shadow space-y-3">
        <h2 className="font-semibold text-lg mb-2 text-primaryDark">About Section</h2>
        <p><strong>Title:</strong> {aboutData.hero.title}</p>
        <p>{aboutData.hero.description1}</p>
        <p>{aboutData.hero.description2}</p>
        <p>{aboutData.hero.description3}</p>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-white p-6 rounded shadow space-y-3">
        <h2 className="font-semibold text-lg mb-2 text-primaryDark">Experience Section</h2>
        <p><strong>{aboutData.experience.title}</strong></p>
        <p>{aboutData.experience.description}</p>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="font-semibold text-lg mb-2 text-primaryDark" >Mission & Vision</h2>
        <p><strong>Mission:</strong> {aboutData.missionVision.mission}</p>
        <p><strong>Vision:</strong> {aboutData.missionVision.vision}</p>
      </section>

      {/* JOURNEY */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="font-semibold text-lg mb-4 text-primaryDark">Our Journey</h2>

        <ul className="space-y-3">
          {aboutData.journey.map((item, index) => (
            <li key={index}>
              <strong>{item.year}:</strong> {item.title} – {item.description}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
