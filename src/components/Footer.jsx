import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faLinkedinIn,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">

      {/* ================= ROW 1 ================= */}
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center border-b border-white/10">
         <img
              src="/images/logo/sera-logo.png"
              alt="Sera Water - Water Treatment Equipment Supplier in Ahmedabad"
              className="h-32 "
            />
      </div>

      {/* ================= ROW 1 ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LOGO + SEO DESCRIPTION */}
          <div>
            
            <h4 className="text-lg font-heading font-semibold text-white mb-4 border-b-2 border-primary pb-2">
              About Us
            </h4>
            <p className="text-gray-300 font-body text-sm leading-relaxed">
              <strong>Sera Water</strong> is a trusted water and wastewater treatment
              equipment supplier in Ahmedabad, offering complete ETP, STP and WTP
              solutions. We provide industrial water treatment equipment across Gujarat.
            </p>
          </div>

         

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4 border-b-2 border-primary pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-primary font-body text-sm">
              <li><Link to="/" className="hover:text-white"><span className="text-sm mr-2 text-white">*</span>Home</Link></li>
              <li><Link to="/about" className="hover:text-white"><span className="text-sm mr-2 text-white">*</span>About Us</Link></li>
              <li><Link to="/products" className="hover:text-white"><span className="text-sm mr-2 text-white">*</span>Products</Link></li>
              <li><Link to="/gallery" className="hover:text-white"><span className="text-sm mr-2 text-white">*</span>Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white"><span className="text-sm mr-2 text-white">*</span>Contact Us</Link></li>
            </ul>
          </div>

          {/* CONTACT + SOCIAL */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4 border-b-2 border-primary pb-2">
              Contact Us
            </h4>

            <div className="space-y-3 text-primary font-body text-sm">
              <a href="tel:+91 75758 04585" className="flex items-center gap-3 hover:text-white">
                <FontAwesomeIcon icon={faPhone} />
                +91 75758 04585
              </a>

              <a href="mailto:serawater007@gmail.com" className="flex items-center gap-3 hover:text-white">
                <FontAwesomeIcon icon={faEnvelope} />
                serawater007@gmail.com
              </a>
            </div>

            <h4 className="text-lg font-heading font-semibold text-white my-4 mt-6 border-b-2 border-primary pb-2">
              Social Media
            </h4>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              <a href="/" ><FontAwesomeIcon icon={faWhatsapp} className="icon " /></a>
              <a href="/"><FontAwesomeIcon icon={faLinkedinIn} className="icon " /></a>
              <a href="/"><FontAwesomeIcon icon={faInstagram} className="icon " /></a>
              <a href="/" ><FontAwesomeIcon icon={faFacebookF} className="icon " /></a>
            </div>
          </div>

           {/* OUR PRODUCTS */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4 border-b-2 border-primary pb-2">
              Find Us Here
            </h4>
           
        <iframe
          title="Sera Water Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.6512255541593!2d72.62349751053054!3d22.963068479128875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e89b7d84262fb%3A0x47b0efc341b584f8!2sSera%20Water!5e0!3m2!1sen!2sin!4v1766657055991!5m2!1sen!2sin"
          className="w-full h-[200px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
     
          </div>

        </div>
      </div>

      {/* ================= ROW 2 : ADDRESSES ================= */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h4 className="text-2xl font-heading  text-white mb-6">
            <FontAwesomeIcon icon={faLocationDot} className="mt-1 text-white" />   Our Branch Locations
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-300 font-body text-sm">

            <a href="https://maps.app.goo.gl/mhm6JnejxtJAQaT99" target="_blank" rel="noreferrer" className="hover:bg-textGray/10 p-2 rounded-lg">
              <h4 className="text-lg font-heading font-semibold text-primary/80 border-b-2 border-primary pb-1 mb-4">
                Ahmedabad (Head Office) :
              </h4>
              <span className="text-textGray text-lg">
                Shed No. 94, Gajanan Industrial Park, Vatva, Ahmedabad – 382445.
              </span>
            </a>

            <a href="https://maps.app.goo.gl/mhm6JnejxtJAQaT99" target="_blank" rel="noreferrer" className="hover:bg-textGray/10 p-2 rounded-lg">
              <h4 className="text-lg font-heading font-semibold text-primary/80 border-b-2 border-primary pb-1 mb-4">
                Surat :
              </h4>
              <span className="text-textGray text-lg">
                105, Regent Plaza, Dindoli, Surat - 394210.
              </span>
            </a>

            <a href="https://maps.app.goo.gl/mhm6JnejxtJAQaT99" target="_blank" rel="noreferrer" className="hover:bg-textGray/10 p-2 rounded-lg">
              <h4 className="text-lg font-heading font-semibold text-primary/80 border-b-2 border-primary pb-1 mb-4">
               Pune:
              </h4>
              <span className="text-textGray text-lg">
                30, Saraswati Navale Industrial Estate, Nehre, Pune – 411041.
              </span>
            </a>

            <a href="https://maps.app.goo.gl/mhm6JnejxtJAQaT99" target="_blank" rel="noreferrer" className="hover:bg-textGray/10 p-2 rounded-lg">
              <h4 className="text-lg font-heading font-semibold text-primary/80 border-b-2 border-primary pb-1 mb-4">
                Lucknow :
              </h4>
              <span className="text-textGray text-lg">
                34, Hind City, Ganeshpur, Deva Industrial Road, Lucknow - 226028.
              </span>
            </a>


            
          </div>
        </div>
      </div>

      {/* ================= ROW 3 : COPYRIGHT ================= */}
      <div className="border-t  border-white/10 text-center flex justify-between flex-col md:flex-row px-6 py-6 gap-2">
        <div className=" text-gray-400 text-sm font-body">
          © {new Date().getFullYear()} <span className="text-primary"> SERA WATER</span>. All Rights Reserved.
        </div>
        <div className=" text-gray-400 text-sm font-body">
          Developed By <a href="www.apnawebx.com" target="_blank" rel="noreferrer" className="font-bold text-primary">APNAWEBX</a>
        </div>
      </div>

    </footer>
  );
}
