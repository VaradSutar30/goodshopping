import React from "react";
import PropTypes from "prop-types";

const FormCheckbox = ({
  name,
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">

      {/* INPUT */}
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="hidden peer"
      />

      {/* CUSTOM BOX */}
      <div className={`w-5 h-5 flex items-center justify-center rounded border 
        border-gray-400 transition-all duration-300 
        peer-checked:bg-[#fac039] peer-checked:border-[#fac039]
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}>
        {/* CHECK ICON */}
        <svg
          className="w-3 h-3 text-black opacity-0 peer-checked:opacity-100 transition"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* LABEL */}
      <span className="text-sm text-gray-700">
        {label || name}
      </span>
    </label>
  );
};

FormCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default FormCheckbox;