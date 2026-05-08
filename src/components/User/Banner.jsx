import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import iphone from "../../assets/img/iphone.jfif";

const Banner = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products");
  };

  return (
    <div className="w-full bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between min-h-screen">

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-xl"
        >
          <h4 className="text-sm md:text-lg uppercase tracking-[4px] text-[#fac039] font-semibold mb-4">
            New Launch
          </h4>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
            iPhone 17{" "}
            <span className="font-bold text-[#fac039]">
              Pro Max
            </span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg mt-6 mb-8 leading-relaxed">
            Experience the future with unmatched performance,
            premium design, and revolutionary camera technology.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            
            {/* Shop Now */}
            <button
              onClick={handleShopNow}
              className="px-7 py-3 bg-[#fac039] text-black font-semibold rounded-lg hover:scale-105 transition duration-300 shadow-lg"
            >
              Shop Now
            </button>

            {/* Learn More */}
            <button className="px-7 py-3 border border-gray-400 text-white rounded-lg hover:bg-white hover:text-black transition duration-300">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 md:mt-0 flex justify-center"
        >
          <motion.img
            src={iphone}
            alt="iPhone 17 Pro Max"
            className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[650px]"
            animate={{ y: [0, -15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;