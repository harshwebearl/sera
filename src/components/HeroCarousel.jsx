import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
    {
        h1: "Wastewater Treatment Solutions Provider in Gujarat",
        h2: "Twin & Tri Lobe Blowers for Aeration Systems",
        description:
            "We supply energy-efficient twin lobe and tri lobe blowers for sewage treatment plants and effluent treatment plants. Our blowers are widely used in industrial wastewater treatment solutions requiring consistent airflow and low power consumption.",
        productImg: "/images/products/ring-blower.png",
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
        h1: "Water Treatment Equipment Supplier in Ahmedabad",
        h2: "Mechanically Actuated Diaphragm Dosing Pumps",
        description:
            "Sera Water is a leading water treatment company in Ahmedabad providing high-precision diaphragm dosing pumps for ETP, STP and WTP plants. Our pumps ensure accurate chemical dosing, long service life, and reliable operation for industrial wastewater treatment applications.",
        productImg: "/images/products/dosing-pump.png",
        bgImg: "/images/home/dosingpump-carousel.png",
    }



];

export default function HeroCarousel() {
    return (
        <section className="relative ">
            <Swiper
                modules={[ Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                speed={900}
                className="w-full "
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative h-[130svh] sm:[100px] md:h-[100vh] xl:h-[90vh] flex bg-cover bg-center pt-14"
                            style={{ backgroundImage: `url(${slide.bgImg})` }}
                        >
                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90"></div>

                            {/* CONTENT */}
                            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex items-center">
                                <div className="w-full py-16 md:py-20">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                                        {/* IMAGE */}
                                        <div className="flex justify-center order-1 md:order-none block md:hidden lg:block">
                                            <img
                                                src={slide.productImg}
                                                alt={slide.h2}
                                                className="
                                                    w-full
                                                    max-w-[260px]
                                                    sm:max-w-[320px]
                                                    md:max-w-[420px]
                                                    h-[260px]
                                                    md:h-[400px]
                                                    object-contain
                                                    drop-shadow-2xl
                                                    "
                                            />
                                        </div>

                                        {/* TEXT */}
                                        <div className="text-white">
                                            <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold leading-tight">
                                                {slide.h1}
                                            </h1>

                                            <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-heading font-semibold text-primary">
                                                {slide.h2}
                                            </h2>

                                            <p className="mt-6 text-base sm:text-lg text-textGray font-body max-w-xl">
                                                {slide.description}
                                            </p>

                                            <div className="mt-8 flex flex-wrap gap-4">
                                                <a
                                                    href="/contact"
                                                    className="bg-primary text-dark px-6 py-3 rounded font-heading font-semibold hover:bg-primaryLight transition"
                                                >
                                                    Get Quote
                                                </a>

                                                <a
                                                    href="/products"
                                                    className="border border-primary text-primary px-6 py-3 rounded font-heading font-semibold hover:bg-primary hover:text-dark transition"
                                                >
                                                    View Products
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
