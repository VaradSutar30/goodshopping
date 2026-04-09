import React from 'react';
import { motion } from 'framer-motion';
import samsung from '../../assets/img/samsung3.png';


const Banner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">
      
      <div className="max-w-[1300px] mx-auto px-4 md:flex items-center justify-between min-h-[90vh]">

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h4 className="text-lg md:text-xl text-green-400 opacity-70 mb-3">
            Samsung Galaxy S25 Ultra
          </h4>

          <h1 className="text-4xl md:text-6xl text-white font-light leading-tight">
            Galaxy S25{" "}
            <span className="font-bold text-[#fac039]">Ultra</span>
          </h1>

          <p className="text-gray-300 mt-6 mb-6 max-w-md">
            Create to change everything for the better. For everyone.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-[#fac039] text-black rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-lg">
              Shop Now
            </button>

            <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-300">
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
            src={samsung}
            alt="Samsung"
            className="w-[300px] md:w-[500px] drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Banner;