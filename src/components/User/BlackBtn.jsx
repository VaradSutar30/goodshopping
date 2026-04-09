import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const BlackBtn = ({
  title,
  link,
  variant = "primary",
  loading = false,
  icon,
  disabled = false,
}) => {

  const baseStyle =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg px-5 py-2.5 transition-all duration-300";

  const variants = {
    primary:
      "bg-black text-white hover:bg-zinc-800 shadow-md hover:shadow-xl",
    outline:
      "border border-black text-black hover:bg-black hover:text-white",
    gradient:
      "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:scale-105 shadow-lg",
  };

  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <NavLink
        to={link || "#"}
        className={`${baseStyle} ${variants[variant]} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? (
          <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
        ) : (
          <>
            {icon && <span>{icon}</span>}
            {title}
          </>
        )}
      </NavLink>
    </motion.div>
  );
};

BlackBtn.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "outline", "gradient"]),
  loading: PropTypes.bool,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
};

export default BlackBtn;