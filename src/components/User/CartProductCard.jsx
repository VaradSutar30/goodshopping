import React, { useState } from "react";
import PropTypes from "prop-types";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";

const CartProductCard = ({
  name,
  imagesrc,
  ram,
  ssd,
  price,
  stock = true,
  onRemove,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const totalPrice = price * quantity;

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="border-b border-gray-200 py-6 flex flex-col md:flex-row gap-6"
    >
      {/* IMAGE */}
      <div className="flex-shrink-0 flex justify-center">
        <img
          src={imagesrc}
          alt={name}
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* DETAILS */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h5 className="font-semibold text-lg md:text-2xl">{name}</h5>
            <p className="text-gray-500 mt-1 text-sm">
              {ram} RAM | {ssd} SSD
            </p>
          </div>

          {/* REMOVE BUTTON */}
          <button
            onClick={onRemove}
            className="text-gray-400 hover:text-red-500 transition"
          >
            <FaXmark size={20} />
          </button>
        </div>

        {/* PRICE */}
        <div className="mt-2">
          <p className="text-lg font-semibold text-black">
            ₹{totalPrice}
          </p>
          <p className="text-sm text-gray-400">
            ₹{price} × {quantity}
          </p>
        </div>

        {/* QUANTITY CONTROL */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              onClick={decreaseQty}
              className="px-3 py-1 hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={increaseQty}
              className="px-3 py-1 hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* STOCK */}
          <div className="flex items-center gap-2">
            <div className="bg-zinc-100 h-8 w-8 rounded flex justify-center items-center">
              <CiDeliveryTruck size={18} />
            </div>
            <span
              className={`text-sm ${
                stock ? "text-green-500" : "text-red-500"
              }`}
            >
              {stock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

CartProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  imagesrc: PropTypes.string.isRequired,
  ram: PropTypes.string,
  ssd: PropTypes.string,
  price: PropTypes.number.isRequired,
  stock: PropTypes.bool,
  onRemove: PropTypes.func,
};

export default CartProductCard;