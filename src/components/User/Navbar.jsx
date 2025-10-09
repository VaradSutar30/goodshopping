import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleDropdownClick = (e) => {
    e.stopPropagation();
    toggleDropdown();
  };

  return (
    <div className="navbar">
      <nav className="w-full h-[88px] flex justify-around items-center relative bg-stone-100 shadow-sm">
        <a href="#" className="font-serif font-bold text-2xl">
          <span className="text-[#fdc135]">Goodshoo</span>ping
        </a>

        {/* Desktop Links */}
        <ul className="md:flex gap-4 hidden">
          {["Home", "Details", "Catelog"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className={({ isActive }) =>
                  `font-semibold font-serif text-[16px] ${
                    isActive
                      ? "py-1 border-b-2 border-[#fac039] text-black"
                      : "text-zinc-400 hover:text-black"
                  } transition-all duration-300 cursor-pointer`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <ul className="md:flex gap-4 hidden items-center">
          {/* Heart Icon */}
          <li>
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `font-semibold ${
                  isActive ? "py-1 text-[#fac039]" : "text-black"
                } transition-all duration-300 cursor-pointer`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s-8-4.6-8-10a5 5 0 0110 0 5 5 0 0110 0c0 5.4-8 10-8 10z"
                />
              </svg>
            </NavLink>
          </li>

          {/* Cart Icon */}
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `font-semibold ${
                  isActive ? "py-1 text-[#fac039]" : "text-black"
                } transition-all duration-300 cursor-pointer`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13l-1.2 6h13.4M7 13l1.4-6H21"
                />
              </svg>
            </NavLink>
          </li>

          {/* User Icon */}
          <li className="relative">
            <button
              onClick={handleDropdownClick}
              className="text-black hover:text-[#fac039] transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20">
                <ul className="flex flex-col">
                  <li>
                    <NavLink
                      to="/order"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      My Order
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden">
          <button
            className="text-2xl text-black hover:text-[#fac039]"
            onClick={toggleMobileMenu}
          >
            {/* Menu Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden z-10 absolute flex border-b flex-col-reverse items-center bg-white w-full transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          {["Home", "Details", "Catelog"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className={({ isActive }) =>
                  `font-semibold text-[16px] ${
                    isActive
                      ? "py-1 border-b-2 border-[#fac039] text-black"
                      : "text-zinc-400 hover:text-black"
                  } transition-all duration-300 cursor-pointer`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
