import React from "react";
import PropTypes from "prop-types";

const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  icon,
  disabled = false,
}) => {
  return (
    <div className="w-full">

      {/* LABEL */}
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}

      {/* INPUT WRAPPER */}
      <div className="relative">

        {/* ICON */}
        {icon && (
          <span className="absolute left-3 top-2.5 text-gray-400">
            {icon}
          </span>
        )}

        {/* INPUT */}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full h-10 rounded-lg border px-3 ${
            icon ? "pl-10" : ""
          } outline-none transition-all duration-300
          ${error
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-300 focus:ring-black focus:border-black"
          }
          ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
          `}
        />
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
};

export default FormInput;