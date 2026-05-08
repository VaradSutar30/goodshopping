import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef();

  // Added Products
  const navItems = ["Home", "Products", "Details", "Catalog"];

  // Close dropdown outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () =>
      document.removeEventListener(
        "click",
        handleClickOutside
      );
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim() !== "") {
      console.log("Searching:", searchTerm);

      // Later navigate to search page
      // navigate(`/search?q=${searchTerm}`)
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/90 shadow-sm">
      <nav className="max-w-[1300px] mx-auto px-4 md:px-8 h-[80px] flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
          <span className="text-[#fac039]">Goodshoo</span>ping
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6">
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

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[250px]"
        >
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full text-sm"
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
          <button type="submit">🔍</button>
        </form>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5">

          {/* Cart */}
          <div className="relative">
            <NavLink to="/cart" className="text-xl">
              🛒
              <span className="absolute -top-2 -right-2 bg-[#fac039] text-xs px-1 rounded-full">
                2
              </span>
            </NavLink>
          </div>

          {/* Profile Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
          >
            <button
              onClick={() =>
                setIsDropdownOpen(!isDropdownOpen)
              }
              className="p-2 rounded-full hover:bg-gray-100"
            >
              👤
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <NavLink
                    to="/orders"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Orders
                  </NavLink>

                  <NavLink
                    to="/wishlist"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Wishlist
                  </NavLink>

                  <NavLink
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() =>
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white shadow-md"
          >
            {/* Mobile Search */}
            <form
              onSubmit={handleSearch}
              className="px-4 py-3"
            >
              <div className="flex bg-gray-100 rounded-full px-4 py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none w-full"
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                />
                <button type="submit">🔍</button>
              </div>
            </form>

            {/* Mobile Nav */}
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${
                  item === "Home"
                    ? ""
                    : item.toLowerCase()
                }`}
                className="block py-3 text-center hover:bg-gray-100"
                onClick={() =>
                  setIsMobileMenuOpen(false)
                }
              >
                {item}
              </NavLink>
            ))}

            <NavLink
              to="/cart"
              className="block py-3 text-center hover:bg-gray-100"
            >
              🛒 Cart
            </NavLink>

            <NavLink
              to="/wishlist"
              className="block py-3 text-center hover:bg-gray-100"
            >
              ❤️ Wishlist
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;