import React from "react";
import PropTypes from "prop-types";
import BlackBtn from "./BlackBtn";
import { FaXmark } from "react-icons/fa6";

const WishlistCard = ({
  imageSrc,
  name,
  description,
  price,
  onRemove,
  onAddToCart,
}) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition relative">

      {/* IMAGE */}
      <img
        src={imageSrc}
        alt={name}
        className="w-24 h-24 object-contain rounded-lg"
      />

      {/* DETAILS */}
      <div className="flex-1">
        <h3 className="font-semibold text-base md:text-lg">{name}</h3>

        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}

        <p className="mt-2 font-bold text-lg">₹{price}</p>
      </div>

      {/* ACTIONS */}
      <div className="flex flex-col items-end gap-3">

        {/* REMOVE */}
        <button
          onClick={onRemove}
          className="text-gray-400 hover:text-red-500 transition"
        >
          <FaXmark size={18} />
        </button>

        {/* ADD TO CART */}
        <BlackBtn
          title="Add to Cart"
          onClick={onAddToCart}
        />

      </div>
    </div>
  );
};

WishlistCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  onRemove: PropTypes.func,
  onAddToCart: PropTypes.func,
};

export default WishlistCard;