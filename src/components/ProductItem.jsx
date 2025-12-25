import { Link } from "react-router-dom";

function ProductItem({ title, link, image, description }) {
  return (
    <Link
      to={link}
      className="group relative block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition duration-300"
    >
      {/* IMAGE */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* DEFAULT TITLE BAR */}
      <div className="text-center absolute bottom-0 left-0  right-0 bg-white/95 px-5 py-4 transition-all duration-300 group-hover:opacity-0">
        <h4 className="text-lg font-heading font-semibold text-darkGray">
          {title}
        </h4>
      </div>

      {/* HOVER GLASS PANEL */}
      <div
        className="
          absolute bottom-0 left-0 right-0 
          translate-y-full
          group-hover:translate-y-0
          transition-transform duration-700
          backdrop-blur-md
          bg-dark/70
          text-white
          px-6 py-6
        "
      >
        <h3 className="text-xl font-heading font-bold text-primary">
          {title}
        </h3>

        <p className="mt-3 text-sm text-gray-200 font-body leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default ProductItem;
    