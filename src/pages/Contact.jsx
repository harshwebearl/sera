import Breadcrumb from "../components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
       <Navbar />
      
            <div className='bg-dark'>
              <Breadcrumb />
            </div>

      {/* BRANCH LOCATIONS */}
      <section className="py-10  ">
        <div className="max-w-7xl mx-auto px-6">

          <div
            className="text-center mb-14"
            data-aos="fade-up"
          >
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Contact Sera Water
            </h1>
            <p className="mt-4 text-gray-600 font-body max-w-3xl mx-auto">
              Get in touch with Sera Water for reliable water and wastewater
              treatment solutions. We serve clients across Ahmedabad and Gujarat
              with complete ETP, STP and WTP equipment.
            </p>
          </div>

          {/* BRANCH GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                city: "Ahmedabad (Head Office)",
                address:
                  "Shed No. 94, Gajanan Industrial Park, Vatva, Ahmedabad – 382445",
              },
              {
                city: "Surat Branch",
                address: "105, Regent Plaza, Dindoli, Surat - 394210.",
              },
              // {
              //   city: "Pune Branch",
              //   address: "30, Saraswati Navale Industrial Estate, Nehre, Pune – 411041.",
              // },
              // {
              //   city: "Lucknow Branch",
              //   address: "34, Hind City, Ganeshpur, Deva Industrial Road, Lucknow - 226028.",
              // },
            ].map((branch, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md hover:shadow-primary transition"
              >
                <h3 className="font-heading font-semibold text-primary mb-2">
                  {branch.city}
                </h3>
                <p className="text-gray-600 font-body text-sm">
                  {branch.address}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section className="py-10   overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* LEFT CTA */}
            <div data-aos="fade-right">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6">
                Get in Touch
              </h2>

              <p className="text-gray-600 font-body mb-8">
                Contact Sera Water for expert guidance on water treatment and
                wastewater treatment solutions. Our team is ready to assist
                you with the right equipment and support.
              </p>

              <div className="space-y-6">

                <a
                  href="tel:+91 75758 04585"
                  className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-lg transition"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-primary text-xl" />
                  <div>
                    <p className="font-heading font-semibold text-darkGray">
                      Call Us
                    </p>
                    <p className="text-gray-600 text-sm">
                     +91 75758 04585
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:serawater007@gmail.com"
                  className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-lg transition"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary text-xl" />
                  <div>
                    <p className="font-heading font-semibold text-darkGray">
                      Email Us
                    </p>
                    <p className="text-gray-600 text-sm">
                      serawater007@gmail.com
                    </p>
                  </div>
                </a>

                <a href="https://maps.app.goo.gl/mhm6JnejxtJAQaT99" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="text-primary text-xl" />
                  <div>
                    <p className="font-heading font-semibold text-darkGray">
                      Head Office
                    </p>
                    <p className="text-gray-600 text-sm">
                      Vatva, Ahmedabad, Gujarat
                    </p>
                  </div>
                </a>

              </div>
            </div>

            {/* RIGHT FORM */}
            <div
              data-aos="fade-left"
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-heading font-semibold text-darkGray mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>

                <button
                  type="submit"
                  className="bg-primary text-dark px-6 py-3 rounded font-heading font-semibold hover:bg-primaryLight transition w-full"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="w-full h-[450px]" data-aos="fade-up">
        <iframe
          title="Sera Water Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.6512255541593!2d72.62349751053054!3d22.963068479128875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e89b7d84262fb%3A0x47b0efc341b584f8!2sSera%20Water!5e0!3m2!1sen!2sin!4v1766657055991!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <Footer />
    </>
  );
}
