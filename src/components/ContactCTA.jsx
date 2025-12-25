import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactCTA() {
  return (
    <section className="relative py-16 bg-primaryDark overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primaryDark opacity-90"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
              Looking for Reliable Water & Wastewater Treatment Solutions?
            </h2>

            <p className="mt-4 text-white/90 font-body max-w-xl">
              Sera Water is a trusted water treatment equipment supplier in Ahmedabad,
              offering complete ETP, STP and WTP solutions for industrial and commercial
              applications across Gujarat. Contact us today for expert guidance and
              customized solutions.
            </p>
          </div>

          {/* RIGHT CTA BOX */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-heading font-semibold text-darkGray mb-6">
              Get in Touch with Our Experts
            </h3>

            <div className="space-y-4">

              {/* CALL */}
              <a
                href="tel:+91 75758 04585"
                className="flex items-center gap-3 text-gray-700 hover:text-primary transition"
              >
                <FontAwesomeIcon icon={faPhone} className="text-primary" />
                <span className="font-body">+91 75758 04585</span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:serawater007@gmail.com"
                className="flex items-center gap-3 text-gray-700 hover:text-primary transition"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                <span className="font-body">serawater007@gmail.com</span>
              </a>

              {/* BUTTON */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 bg-primary text-white px-6 py-3 rounded font-heading font-semibold hover:bg-primaryDark transition"
              >
                Request a Quote
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
