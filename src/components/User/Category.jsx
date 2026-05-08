import {
  IoPhonePortraitOutline,
  IoWatch,
} from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";
import { TiCamera } from "react-icons/ti";
import { GrPersonalComputer } from "react-icons/gr";
import { LuGamepad2 } from "react-icons/lu";
import { motion } from "framer-motion";

function Category() {
  const categories = [
    {
      icon: <IoPhonePortraitOutline size={30} />,
      title: "Phones",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <IoWatch size={30} />,
      title: "Watches",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: <TiCamera size={30} />,
      title: "Cameras",
      color: "from-red-500 to-orange-400",
    },
    {
      icon: <FaHeadphones size={30} />,
      title: "Headphones",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: <GrPersonalComputer size={30} />,
      title: "Laptops",
      color: "from-gray-700 to-gray-500",
    },
    {
      icon: <LuGamepad2 size={30} />,
      title: "Gaming",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-14">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center md:text-left"
      >
        <p className="text-[#fac039] font-semibold uppercase tracking-widest text-sm">
          Categories
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Shop By Category
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Explore premium gadgets across multiple categories
        </p>
      </motion.div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-100">

              {/* Icon Circle */}
              <div
                className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-4 group-hover:rotate-12 transition duration-300`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-800 text-lg">
                {item.title}
              </h3>

              {/* Small Text */}
              <p className="text-sm text-gray-500 mt-2">
                Explore now
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Category;