import React, { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import PropTypes from "prop-types";
import BlackBtn from "../../components/User/BlackBtn";
import { motion } from "framer-motion";

const ProductCard = ({
  title,
  price,
  originalPrice,
  imageSrc,
  rating = 4,
  onAddToCart,
}) => {
  const [liked, setLiked] = useState(false);

  const discount =
    originalPrice && Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg p-4 relative group transition-all"
    >
      {/* WISHLIST */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-3 right-3 text-xl"
      >
        {liked ? (
          <IoMdHeart className="text-red-500" />
        ) : (
          <IoMdHeartEmpty className="text-gray-400 hover:text-red-500" />
        )}
      </button>

      {/* IMAGE */}
      <div className="overflow-hidden flex justify-center">
        <img
          src={imageSrc}
          alt={title}
          className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-sm md:text-base font-medium mt-3 line-clamp-2">
        {title}
      </h3>

      {/* RATING */}
      <div className="flex text-yellow-400 text-sm mt-1">
        {"★".repeat(rating)}
        <span className="text-gray-300">
          {"★".repeat(5 - rating)}
        </span>
      </div>

      {/* PRICE */}
      <div className="mt-2">
        <span className="font-bold text-lg">₹{price}</span>

        {originalPrice && (
          <>
            <span className="line-through text-gray-400 text-sm ml-2">
              ₹{originalPrice}
            </span>
            <span className="text-green-500 text-sm ml-2">
              {discount}% OFF
            </span>
          </>
        )}
      </div>

      {/* BUTTON */}
      <div className="mt-4">
        <BlackBtn
          title="Add to Cart"
          onClick={onAddToCart}
          variant="primary"
        />
      </div>
    </motion.div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  imageSrc: PropTypes.string,
  rating: PropTypes.number,
  onAddToCart: PropTypes.func,
};

export default ProductCard;