import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Topbar({ onMenuClick }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <div className="flex items-center justify-between w-full">
        
        <h1 className="font-heading font-semibold text-xl text-textDark">
          Admin Panel
        </h1>
        {/* MOBILE MENU BUTTON */}
        <button
          onClick={onMenuClick}
          className="md:hidden text-xl text-gray-700"
        >
          <FontAwesomeIcon icon={faBars} className="icon" />
        </button>

      </div>

      {/* LOGOUT */}
      <button
        onClick={handleLogout}
        className="hidden md:flex items-center gap-2 text-red-600 text-sm font-semibold hover:text-red-700"
      >
        <FontAwesomeIcon icon={faRightFromBracket} className=" border-red-500 border-2 text-red-500 p-2 rounded-xl hover:bg-red-500 hover:text-white transition" />
        
      </button>
    </header>
  );
}
