import { Link } from "react-router-dom";
import { products } from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

export default function Products() {
  return (
    <>
      <Navbar />

      <div className="bg-dark">
        <Breadcrumb />
      </div>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* PAGE TITLE */}
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Our Products
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of water and wastewater treatment equipment
              designed for industrial and commercial applications.
            </p>
          </div>

          {/* CATEGORY LOOP */}
          {products.map((category, index) => (
            <div key={index} className="mb-16">

              {/* CATEGORY TITLE */}
              <h2 className="text-2xl font-semibold text-primary mb-6">
                {category.categoryName}
              </h2>

              {/* PRODUCT GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.items.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/products/${category.category}/${item.slug}`}
                    className="group bg-gray-50 rounded-xl shadow-sm hover:shadow-md hover:shadow-primary transition overflow-hidden border border-primaryDark/30"
                  >
                    <div className="h-44 bg-white flex items-center justify-center p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-36 w-full object-contain group-hover:scale-105 transition"
                      />
                    </div>

                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-lg text-dark group-hover:text-primary">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.shortDesc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </>
  );
}
