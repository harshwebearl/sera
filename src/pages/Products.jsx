import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { products } from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Products() {
  return (
    <>

      <Navbar />
            
                  <div className='bg-dark'>
                    <Breadcrumb />
                  </div>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-14" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Our Products
            </h1>
            <p className="mt-4 text-gray-600 font-body max-w-3xl mx-auto">
              Explore our range of water and wastewater treatment equipment
              designed for ETP, STP and WTP applications across industries.
            </p>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                to={`/products/${product.slug}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition hover:shadow-primary"
              >
                <div className="h-48 flex items-center justify-center bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-36 object-contain group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-heading font-semibold text-darkGray group-hover:text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-body">
                    {product.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
