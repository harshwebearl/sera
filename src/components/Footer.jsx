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
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LOGO + SEO DESCRIPTION */}
          <div>
            <img
              src="/images/logo/sera-logo.png"
              alt="Sera Water - Water Treatment Equipment Supplier in Ahmedabad"
              className="h-14 mb-4"
            />
            <p className="text-gray-300 font-body text-sm leading-relaxed">
              <strong>Sera Water</strong> is a trusted water and wastewater treatment
              equipment supplier in Ahmedabad, offering complete ETP, STP and WTP
              solutions. We provide industrial water treatment equipment across Gujarat.
            </p>
          </div>

          {/* OUR PRODUCTS */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-primary mb-4 border-b-2 border-primary pb-2">
              Our Products
            </h4>
            <ul className="space-y-2 text-gray-300 font-body text-sm">
              <li><Link to="/products/air-blowers" className="hover:text-primary">Blowers</Link></li>
              <li><Link to="/products/sludge-dewatering" className="hover:text-primary">Sludge Dewatering</Link></li>
              <li><Link to="/products/dosing-pumps" className="hover:text-primary">Acoustic Hoods</Link></li>
              <li><Link to="/products/spare-parts-accessories" className="hover:text-primary">Spare Parts</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-primary mb-4 border-b-2 border-primary pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-300 font-body text-sm">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/products" className="hover:text-primary">Products</Link></li>
              <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
              {/* <li><Link to="/blogs" className="hover:text-primary">Blogs</Link></li> */}
              <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>

          {/* CONTACT + SOCIAL */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-primary mb-4 border-b-2 border-primary pb-2">
              Contact Us
            </h4>

            <div className="space-y-3 text-gray-300 font-body text-sm">
              <a href="tel:+91 75758 04585" className="flex items-center gap-3 hover:text-primary">
                <FontAwesomeIcon icon={faPhone} />
                +91 75758 04585
              </a>

              <a href="mailto:serawater007@gmail.com" className="flex items-center gap-3 hover:text-primary">
                <FontAwesomeIcon icon={faEnvelope} />
                serawater007@gmail.com
              </a>
            </div>

            <h4 className="text-lg font-heading font-semibold text-primary my-4 mt-6 border-b-2 border-primary pb-2">
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

        </div>
      </div>

      {/* ================= ROW 2 : ADDRESSES ================= */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h4 className="text-2xl font-heading  text-primary mb-6">
            <FontAwesomeIcon icon={faLocationDot} className="mt-1 text-primary" />   Our Branch Locations
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
