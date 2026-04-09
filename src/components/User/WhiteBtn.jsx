import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const WhiteBtn = ({
  title,
  link,
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
}) => {

  const baseStyle =
    "inline-flex items-center justify-center border border-black text-black font-medium rounded transition-all duration-300";

  const styles = `
    ${baseStyle}
    px-4 py-2 md:px-6
    ${fullWidth ? "w-full" : "w-auto"}
    ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-100"}
  `;

  // 👉 If link present → NavLink
  if (link) {
    return (
      <NavLink to={link} className={styles}>
        {title}
      </NavLink>
    );
  }

  // 👉 Otherwise → Button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {title}
    </button>
  );
};

WhiteBtn.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default WhiteBtn;