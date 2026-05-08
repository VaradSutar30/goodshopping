import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    localStorage.setItem(
      "buyNowProduct",
      JSON.stringify(product)
    );

    navigate("/checkout");
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-52 object-contain"
      />

      <h3 className="font-semibold mt-3">
        {product.title}
      </h3>

      <p className="text-yellow-500 font-bold mt-2">
        ₹{product.price}
      </p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={onAddToCart}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          Add Cart
        </button>

        <button
          onClick={handleBuyNow}
          className="w-full bg-yellow-400 py-2 rounded-lg font-semibold"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;