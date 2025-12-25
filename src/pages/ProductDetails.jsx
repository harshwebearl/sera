import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { products } from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProductDetails() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <>
     <Navbar />
           
                 <div className='bg-dark'>
                   <Breadcrumb />
                 </div>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div data-aos="fade-right">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md mx-auto object-contain"
            />
          </div>

          {/* CONTENT */}
          <div data-aos="fade-left">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 font-body leading-relaxed mb-6">
              {product.description}
            </p>

            <h3 className="font-heading font-semibold text-primaryDark mb-3">
              Applications
            </h3>

            <ul className="list-disc pl-5 text-gray-600 font-body space-y-2">
              {product.applications.map((app, index) => (
                <li key={index}>{app}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
