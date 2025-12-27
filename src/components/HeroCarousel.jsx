import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import "swiper/css";


const slideVariants = {
  hiddenLeft: { opacity: 0, x: -80 },
  hiddenBottom: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slides = [
    {
        h1: "Wastewater Treatment Solutions Provider in Gujarat",
        h2: "Twin Lobe Blowers for Aeration Systems",
        description:
            "We supply energy-efficient twin lobe and tri lobe blowers for sewage treatment plants and effluent treatment plants. Our blowers are widely used in industrial wastewater treatment solutions requiring consistent airflow and low power consumption.",
        productImg: "/images/products/air-blower.png",
        bgImg: "/images/home/blower-carousel.png",
    },
    {
        h1: "Sludge Dewatering Machine Supplier in Ahmedabad",
        h2: "Industrial Sludge Dewatering Solutions",
        description:
            "Sera Water is a trusted sludge dewatering machine supplier in Ahmedabad offering efficient sludge dewatering solutions for ETP and STP plants. Our sludge dewatering systems reduce sludge volume, improve handling efficiency, and ensure cost-effective wastewater treatment .",
        productImg: "/images/products/sludge-dewatering.png",
        bgImg: "/images/home/slugdewatering-carousel.png",
    },

    {
        h1: "Acoustic Hood Supplier in Ahmedabad",
        h2: "Industrial Noise Control Acoustic Hoods",
        description:
            "Sera Water is a trusted acoustic hood supplier in Ahmedabad providing high-quality noise control enclosures for blowers, pumps and industrial equipment. Our acoustic hoods effectively reduce sound levels, ensure compliance with noise regulations and maintain proper ventilation for ETP, STP and WTP plant applications.",
        productImg: "/images/products/acoustic-hoods.png",
        bgImg: "/images/home/dosingpump-carousel.png",
    }

];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        speed={1000}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[130svh] sm:[100px] md:h-[95vh]  flex bg-cover bg-center pt-20"
              style={{ backgroundImage: `url(${slide.bgImg})` }}
            >
              <div className="absolute inset-0 bg-black/70" />

              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="  px-6 grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 md:gap-0">

                  {/* IMAGE ANIMATION */}
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.img
                        key={`img-${index}`}
                        src={slide.productImg}
                        initial={{ x: -120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -120, opacity: 0 }}
                        transition={{ duration: 2 }}
                        className="w-[350px] md:w-full h-[300px] md:h-[450px] object-contain"
                      />
                    )}
                  </AnimatePresence>

                  {/* TEXT CONTENT */}
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        key={`text-${index}`}
                        initial={{ y: 120, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 120, opacity: 0 }}
                        transition={{ duration: 2 }}
                        className="text-white"
                      >
                        <h1 className="text-3xl md:text-4xl font-bold">
                          {slide.h1}
                        </h1>

                        <h2 className="mt-3 text-xl text-primary">
                          {slide.h2}
                        </h2>

                        <p className="mt-5 max-w-xl text-gray-200">
                          {slide.description}
                        </p>

                        <div className="mt-6 flex gap-4">
                          <a
                            href="/contact"
                            className="bg-primary px-6 py-3 rounded text-dark font-semibold"
                          >
                            Get Quote
                          </a>
                          <a
                            href="/products"
                            className="border border-primary px-6 py-3 rounded text-primary"
                          >
                            View Products
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

