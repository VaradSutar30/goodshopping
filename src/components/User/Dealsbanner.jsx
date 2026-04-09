import React from "react";
import { motion } from "framer-motion";
import laptop from "../../assets/img/laptop.png";
import iphone from "../../assets/img/iphone.png";

function Dealsbanner() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#141e30] to-[#243b55] py-10 md:py-16">

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center">

        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-lg md:text-xl text-gray-300"
        >
          Limited Time Offer 🎉
        </motion.h4>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-6xl text-white font-light mt-2"
        >
          Big Diwali{" "}
          <span className="font-bold text-[#fac039]">Sale</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-300 mt-4 mb-6 max-w-lg"
        >
          Attractive deals on smartphones, laptops, watches and more.
        </motion.p>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-[#fac039] text-black px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Shop Now
        </motion.button>
      </div>

      {/* LEFT IMAGE (IPHONE) */}
      <motion.img
        src={iphone}
        alt="iphone"
        className="absolute left-2 md:left-16 top-10 md:top-12 w-24 md:w-44 drop-shadow-2xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* RIGHT IMAGE (LAPTOP) */}
      <motion.img
        src={laptop}
        alt="laptop"
        className="absolute right-2 md:right-16 bottom-5 md:bottom-10 w-28 md:w-52 drop-shadow-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* GLOW EFFECT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
    </div>
  );
}

export default Dealsbanner;