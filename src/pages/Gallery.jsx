import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const galleryImages = [
    {
        id: 1,
        title: "Acoustic Hoods",
        image: "/images/products/acoustic-hoods.png",
    },
    {
        id: 2,
        title: "Air Blower",
        image: "/images/products/air-blower.png",
    },
    {
        id: 3,
        title: "Sludge Dewatering Unit",
        image: "/images/products/sludge-dewatering.png",
    },
    {
        id: 4,
        title: "Ring Blower ",
        image: "/images/products/ring-blower.png",
    },
    {
        id: 5,
        title: "Spare Parts & Accessories",
        image: "/images/products/spare-parts.png",
    },
];

export default function Gallery() {

    return (
        <>
            <Navbar />

            <div className='bg-dark'>
                <Breadcrumb />
            </div>

            {/* GALLERY SECTION */}
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* HEADING */}
                    <div className="text-center mb-14" data-aos="fade-up">
                        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                            Water & Wastewater Treatment Project Gallery
                        </h1>
                        <p className="mt-4 text-gray-600 font-body max-w-3xl mx-auto">
                            Browse our project gallery featuring successfully executed water and
                            wastewater treatment installations, including ETP, STP and WTP plants,
                            sludge dewatering systems, industrial blowers and acoustic enclosures
                            delivered by Sera Water across Ahmedabad and Gujarat.
                        </p>
                    </div>




                    {/* GALLERY GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryImages.map((item, index) => (
                            <div
                                key={item.id}
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                                className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-64 object-contain group-hover:scale-105 transition duration-500"
                                />

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                    <h3 className="text-white font-heading font-semibold text-lg text-center px-4">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}
