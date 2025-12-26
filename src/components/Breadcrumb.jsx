import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Breadcrumb({
  bgImage = "/images/breadcrumb/breadcrumb-bg.jpg",
}) {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter(Boolean);

  const pageTitle = pathnames.length
    ? pathnames[pathnames.length - 1]
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())
    : "Home";

  return (
    <section
      className="relative h-[220px] md:h-[70vh] bg-cover bg-center mt-[70px] "
      style={{ backgroundImage: `url(/images/logo/breadcrumb.png)` }} data-aos="fade-zoom-in"
    
    >
      {/* GRADIENT SHADOW OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-black/70 to-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center" data-aos="fade-up">
        
        {/* PAGE TITLE */}
        <h1 className="text-2xl md:text-4xl font-heading font-bold text-white mb-3">
          {pageTitle}
        </h1>

        {/* BREADCRUMB */}
        <nav
          className="flex items-center text-sm md:text-base font-body text-gray-200"
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-primary transition"
          >
            <FontAwesomeIcon icon={faHouse} />
           <span className="hidden md:block">Home</span> 
          </Link>

          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames
              .slice(0, index + 1)
              .join("/")}`;

            const isLast = index === pathnames.length - 1;

            const formattedName = name
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase());

            return (
              <span key={index} className="flex items-center gap-2 ml-2 " >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-xs opacity-70"
                />

                {isLast ? (
                  <span className="text-primary font-semibold">
                    {formattedName}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="hover:text-primary transition"
                  >
                    {formattedName}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
