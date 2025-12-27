import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ProductDetails() {
  const { category, slug } = useParams();

  const categoryData = products.find((cat) => cat.category === category);

  if (!categoryData) {
    return <p className="p-10">Category not found</p>;
  }

  const product = categoryData.items.find((item) => item.slug === slug);

  if (!product) {
    return <p className="p-10">Product not found</p>;
  }

  const relatedProducts = categoryData.items.filter(
    (item) => item.slug !== slug
  );

  return (
    <>
      <Navbar />
      <div className="bg-dark">
        <Breadcrumb />
      </div>

      <div className="max-w-7xl mx-auto p-6">

        {/* PRODUCT DETAILS */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 mt-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-[420px] object-contain"
          />

          <div>
            <h1 className="text-3xl font-bold text-primaryDark mb-4">
              {product.name}
            </h1>

            <p className="text-gray-700 mb-6">
              {product.description}
            </p>

            <h3 className="font-semibold mb-2 text-primaryDark">
              Applications
            </h3>
            <ul className="list-disc ml-6 mb-6">
              {product.applications.map((app, i) => (
                <li key={i}>{app}</li>
              ))}
            </ul>

            <h3 className="font-semibold mb-2 text-primaryDark">
              Key Features
            </h3>
            <ul className="list-disc ml-6">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RELATED PRODUCTS SLIDER */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6 text-primaryDark">
            Related Products
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {relatedProducts.map((item) => (
              <SwiperSlide key={item.slug}>
                <div className="border border-primaryDark/30 rounded-xl p-5 hover:shadow-md hover:shadow-primary transition group">
                 <Link
                    to={`/products/${category}/${item.slug}`}
                    className="inline-block text-primary font-semibold"
                  > <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 w-full object-contain mb-4 group-hover:scale-105 transition"
                  />

                  <h3 className="text-lg font-semibold text-primaryDark mb-2 bg-primary/10 text-center">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3 h-10">
                    {item.shortDesc}
                  </p>

                  
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Footer />
    </>
  );
}
