import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductSlider() {

  const allProducts = products.flatMap(category =>
    category.items.map(item => ({
      ...item,
      category: category.category,
    }))
  );

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10 text-primaryDark">
          Our Products
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={30}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {allProducts.map((product, index) => (
            <SwiperSlide key={index}>
              <Link
                to={`/products/${product.category}/${product.slug}`}
                className="block text-center group"
              >
                <div className="w-48 h-48 p-1 mx-auto rounded-full border-4 border-primaryDark/50 overflow-hidden  ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="mt-4 font-semibold text-gray-800 group-hover:text-primary">
                  {product.name}
                </h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
