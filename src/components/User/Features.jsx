import React from "react";
import { motion } from "framer-motion";
import macbook from "../../assets/img/mackbook.jfif";
import iphone11 from "../../assets/img/ip.png";
import iphone15 from "../../assets/img/iphone15.png";

const Features = () => {


    
  const items = [
    {
      img: iphone11,
      title: "iPhone 11",
      desc: "Powerful performance with A13 Bionic chip and great camera.",
    },
    {
      img: iphone15,
      title: "iPhone 15",
      desc: "Immersive sound with noise cancellation and transparency mode.",
    },
  ];

  return (
    <section className="max-w-[10000px] mx-auto px-4 py-12 grid md:grid-cols-2 gap-6">

      {/* LEFT SIDE */}
      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-5 hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />

            <div>
              <h2 className="text-lg md:text-xl font-semibold">
                {item.title}
              </h2>
              <p className="text-gray-500 text-sm mt-2 max-w-xs">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-black to-zinc-800 rounded-2xl p-6 flex flex-col justify-between text-white relative overflow-hidden"
      >
        <div>
          <h2 className="text-2xl md:text-4xl font-light">
            MacBook{" "}
            <span className="font-bold text-[#fac039]">Pro</span>
          </h2>

          <p className="text-gray-300 mt-4 max-w-sm">
            Supercharged performance with M3 chip, Retina display, and all-day battery life.
          </p>

          <button className="mt-6 bg-[#fac039] text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition">
            Buy Now
          </button>
        </div>



        <img
          src={macbook}
          alt="MacBook"
          className="absolute bottom-0 right-0 w-48 md:w-80 opacity-90"
        />
      </motion.div>
    </section>
  );
};

export default Features;