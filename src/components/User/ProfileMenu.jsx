import React, { useState, useRef, useEffect } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { IoMdPower } from "react-icons/io";

const ProfileMenu = ({ user = "Varad", onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setIsOpen(!isOpen);

  // 👉 Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      
      {/* BUTTON */}
      <button
        onClick={toggleMenu}
        className="text-lg hover:text-[#fac039] transition"
      >
        <FaUserAstronaut />
      </button>

      {/* DROPDOWN */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-48 bg-white border rounded-lg shadow-lg z-50 overflow-hidden">

          {/* USER */}
          <div className="px-4 py-3 border-b">
            <p className="font-semibold text-gray-800">
              Hi, {user} 👋
            </p>
          </div>

          {/* MENU */}
          <button className="w-full flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-black transition">
            <GrDeliver />
            My Orders
          </button>

          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50 transition"
          >
            <IoMdPower />
            Logout
          </button>

        </div>
      )}
    </div>
  );
};

export default ProfileMenu;