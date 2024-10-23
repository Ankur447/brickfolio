import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

const locations = [
  { value: "", label: "Buy In Pune" },
  { value: "kharadi", label: "Buy in Mumbai" },
  { value: "vimanNagar", label: "Buy in Dubai" },
  { value: "kalyaniNagar", label: "Buy in Kalyani Nagar" },
];

const Navbar = ({ selectedValue, onChange }) => {
  return (
    <nav className="w-full flex bg-[#FFF6EF] p-3 shadow">
      {/* Mobile Menu Icon - visible only on small screens */}
      <button className="sm:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Logo */}
      <div className="flex-shrink-0 mr-4">
        <a href="/">
          <img src={logo} alt="Logo" className="h-8" />
        </a>
      </div>

      {/* Search Bar Container */}
      <div className="flex-grow flex justify-center items-center">
        <div className="flex items-center border border-black rounded-md overflow-hidden md:w-1/2 ">
          {/* Location Select */}
          <select
            value={selectedValue}
            onChange={onChange}
            className="text-sm px-0.5 py-1.5 border-r-2 focus:outline-none text-gray-600 bg-white"
          >
            {locations.map((location) => (
              <option key={location.value} value={location.value}>
                {location.label}
              </option>
            ))}
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Add More"
            className="flex-grow px-2 py-1.5 text-sm focus:outline-none"
          />

          {/* Search Button */}
          <button className="bg-orange-500 text-white px-4 py-0.5 rounded-full text-sm font-medium">
            Search
          </button>
        </div>
      </div>

      {/* Login/Shortlist Buttons - hidden on mobile */}
      <div className="hidden md:flex space-x-4 ml-4">
        <button className="bg-[#FDE7D7] border border-black hover:bg-[#F0E4D7] text-gray-700 py-2 px-4 rounded-md shadow">
          <FontAwesomeIcon className="mr-2" icon={faUser} />
          Login
        </button>
        <button className="bg-[#FDE7D7] border border-black hover:bg-[#F0E4D7] text-gray-700 py-2 px-4 rounded-md shadow">
          <FontAwesomeIcon className="mr-2" icon={faHeart} />
          Shortlist
        </button>
      </div>
    </nav>
  );
};

// Prop validation
Navbar.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Navbar;
