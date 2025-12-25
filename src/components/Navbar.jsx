import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import {
  faWhatsapp,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setProductOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold border-b-2 border-primary"
      : "hover:text-primary transition";


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const products = [
    { name: "Blowers", path: "/products/blowers" },
    { name: "Sludge Dewatering", path: "/products/sludge-dewatering" },
    { name: "Acoustic Hoods", path: "/products/acoustic-hoods" },
    { name: "Spare Parts / Accessories", path: "/products/spare-parts" },
  ];



  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo/sera-logo.png"
            className="h-14 md:h-16"
            alt="Sera Water Logo"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-white items-center font-body text-lg">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>

          {/* DESKTOP PRODUCTS DROPDOWN */}
          <div className="relative group hidden md:block">
            <NavLink
              to="/products"
              className={navLinkClass}
            >
              Products
            </NavLink>

            {/* DROPDOWN */}
            <div className="
    absolute left-0 top-5 mt-3
    w-56 bg-white shadow-xl rounded-b-lg
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition-all duration-300 z-50
  ">
              <ul className="py-2">
                {products.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-5 py-2 text-sm font-body text-gray-700 hover:bg-primary/10 hover:text-primary transition
              ${isActive ? "text-primary font-semibold" : ""}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
          {/* <NavLink to="/blogs" className={navLinkClass}>Blogs</NavLink> */}
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

          <a
            href="tel:+91 75758 04585" target="_blank" rel="noreferrer"
            className="flex items-center gap-3 hover:text-primary transition"
          >
            <FontAwesomeIcon icon={faPhone} className="text-2xl icon" />
          </a>
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          <FontAwesomeIcon icon={faBars} className="icon" />
        </button>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[85vw] bg-dark z-50 pt-2
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center px-4">
          <img
            src="/images/logo/sera-logo.png"
            className="h-14"
            alt="Sera Water Logo"
          />
        </Link>

        {/* CLOSE */}
        <div className="absolute top-4 right-4">
          <button
            className="text-white text-2xl"
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
          >
            <FontAwesomeIcon icon={faXmark} className="icon" />
          </button>
        </div>


        {/* MOBILE LINKS */}
        <nav className="flex flex-col gap-6 px-8 pt-4 text-textGray font-body text-lg bg-dark h-screen">

          <NavLink to="/" end className={navLinkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>
            About
          </NavLink>


          <div className="flex flex-col">
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="flex justify-between items-center text-left font-body text-lg text-textGray"
            >
             <NavLink to="/products">Products</NavLink> 
              <span className={`transition-transform ${productOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {productOpen && (
              <div className="mt-2 ml-4 space-y-2">
                {products.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    onClick={() => {
                      setOpen(false);
                      setProductOpen(false);
                    }}
                    className={({ isActive }) =>
                      `block transition
             ${isActive
                        ? "text-primary font-semibold"
                        : "text-textGray hover:text-primary"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>




          <NavLink to="/gallery" className={navLinkClass} onClick={() => setOpen(false)}>
            Gallery
          </NavLink>
          {/* <NavLink to="/blogs" className={navLinkClass} onClick={() => setOpen(false)}>
            Blogs
          </NavLink> */}
          <NavLink to="/contact" className={navLinkClass} onClick={() => setOpen(false)}>
            Contact
          </NavLink>

          {/* DIVIDER */}
          <div className="border-t border-white/20 "></div>

          {/* CONTACT DETAILS */}
          <div className="space-y-4 text-sm text-textGray">

            <a
              href="tel:+91 75758 04585" target="_blank" rel="noreferrer"
              className="flex items-center gap-3 hover:text-primary transition"
            >
              <FontAwesomeIcon icon={faPhone} className="text-xl" />
              <span>+91 75758 04585</span>
            </a>

            <a
              href="mailto:serawater007@gmail.com" target="_blank" rel="noreferrer"
              className="flex items-center gap-3 hover:text-primary transition pt-1"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              <span>serawater007@gmail.com</span>
            </a>

            <a
              href="https://maps.app.goo.gl/RaKXRTswPt5VWdQVA" target="_blank" rel="noreferrer"
              className="flex items-center gap-3 hover:text-primary transition"
            >
              <FontAwesomeIcon icon={faLocationDot} className="text-xl" />
              <span className="w-fit" >
                Shed No 94, Gajanan  Industrial Park,
                Vatva, Ahmedabad – 382445
              </span>
            </a>


          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            </a>

            <a
              href="/"
              className="icon-btn" target="_blank" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            </a>

            <a
              href="/"
              className="icon-btn" target="_blank" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>

            <a
              href="/"
              className="icon-btn" target="_blank" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} className="icon" />
            </a>
          </div>

        </nav>

      </div>
    </nav>
  );
}
