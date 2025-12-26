import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const menu = [
  { name: "Dashboard", path: "/admin/dashboard", icon: "📊" },
  { name: "Home Page", path: "/admin/homecms", icon: "🏠" },
  { name: "About Page", path: "/admin/aboutcms", icon: "🏠" },
  { name: "Products CMS", path: "/admin/productslist", icon: "📦" },
  { name: "Industry Section", path: "/admin/industriescms", icon: "🏠" },
  { name: "Client Section", path: "/admin/clientscms", icon: "🏠" },
  { name: "Testimonial Section", path: "/admin/testimonialscms", icon: "💬" },
  { name: "Gallery", path: "/gallery", icon: "🖼️" },
  { name: "Logout", path: "/login", icon: "↩" },
];

export default function Sidebar({ mobile = false, closeSidebar }) {
  return (
    <aside
      className={`
        bg-dark text-white flex flex-col
        ${mobile ? "w-screen h-full" : "w-64 hidden md:flex"}
      `}
    >
      {/* TOP BAR (LOGO + CLOSE BUTTON FOR MOBILE) */}
      <div className="flex items-center justify-between p-4 py-2 border-b border-white/10">
        <Link to="/admin/dashboard" onClick={closeSidebar}>
          <img
            src="/images/logo/sera-logo.png"
            className="h-16 object-contain"
            alt="Sera Water Logo"
          />
        </Link>

        {/* CLOSE BUTTON (MOBILE ONLY) */}
        {mobile && (
          <button
            onClick={closeSidebar}
            className="text-white text-2xl md:hidden"
            aria-label="Close sidebar"
          >
            <FontAwesomeIcon icon={faXmark} className="icon" />
          </button>
        )}
      </div>

      {/* MENU */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menu.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded transition
               ${
                 isActive
                   ? "bg-primary text-dark font-semibold"
                   : "hover:bg-white/10"
               }`
            }
          >
            <span>{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
