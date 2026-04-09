import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const navItems = ["Home", "Details", "Catalog"];

  // CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 shadow-sm">

      <nav className="max-w-[1300px] mx-auto px-6 h-[80px] flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold">
          <span className="text-[#fac039]">Goodshoo</span>ping
        </h1>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive
                      ? "text-black border-b-2 border-[#fac039]"
                      : "text-gray-500 hover:text-black"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ICONS */}
        <div className="hidden md:flex items-center gap-5">

          {/* CART WITH BADGE */}
          <div className="relative">
            <NavLink to="/cart">
              🛒
              <span className="absolute -top-2 -right-2 bg-[#fac039] text-xs px-1 rounded-full">
                2
              </span>
            </NavLink>
          </div>

          {/* USER */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              👤
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <NavLink to="/orders" className="block px-4 py-2 hover:bg-gray-100">
                    My Orders
                  </NavLink>
                  <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100">
                    Logout
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white shadow-md flex flex-col items-center py-4"
          >
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="py-2 text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;