import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";



export default function Testimonials() {
    const testimonials = [
        {
            name: "Rajesh Patel",
            review:
                "Sera Water supplied complete ETP equipment including sludge dewatering machines for our chemical manufacturing unit in Ahmedabad. Their wastewater treatment solutions are reliable and fully compliant with standards.",
        },
        {
            name: "Amit Shah",
            review:
                "We installed twin lobe blowers and dosing pumps from Sera Water for our STP plant. The performance of the water treatment equipment has been excellent, ensuring consistent aeration and smooth plant operation.",
        },
        {
            name: "Neha Mehta",
            review:
                "Sera Water provided customized wastewater treatment solutions for our pharmaceutical facility in Gujarat. Their ETP and STP equipment helped us improve efficiency while meeting strict environmental compliance.",
        },
    ];


    return (
        <section className="py-20  ">
            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADING */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                        What Our Clients Say
                    </h2>
                    <p className="mt-4 text-gray-600 font-body max-w-2xl mx-auto">
                        Hear from our clients who trust Sera Water for reliable water and
                        wastewater treatment solutions across industries.
                    </p>
                </div>

                {/* TESTIMONIALS SWIPER */}
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop
                    spaceBetween={30}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative bg-gray-50 rounded-xl p-4  shadow-sm hover:shadow-lg transition h-full">

                                <FontAwesomeIcon
                                    icon={faQuoteLeft}
                                    className="
                                            text-primary/20
                                            text-4xl
                                            mb-4 absolute -bottom-5 right-0 text-8xl
                                        "
                                />

                                {/* REVIEW */}
                                <p className="text-gray-700 font-body italic leading-relaxed h-[150px]">
                                    “{item.review}”
                                </p>

                                {/* CLIENT INFO */}
                                <div className="flex items-center gap-4 mt-6">


                                    <div>
                                        <h4 className="text-primary font-heading font-semibold">
                                            {item.name}
                                        </h4>
                                    </div>


                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}
