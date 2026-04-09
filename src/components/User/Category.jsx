import {
  IoPhonePortraitOutline,
  IoWatch,
} from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";
import { TiCamera } from "react-icons/ti";
import { GrPersonalComputer } from "react-icons/gr";
import { LuGamepad2 } from "react-icons/lu";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";

function Category() {

  const categories = [
    { icon: <IoPhonePortraitOutline size={26} />, title: "Phones" },
    { icon: <IoWatch size={26} />, title: "Watches" },
    { icon: <TiCamera size={26} />, title: "Cameras" },
    { icon: <FaHeadphones size={26} />, title: "Headphones" },
    { icon: <GrPersonalComputer size={26} />, title: "Laptops" },
    { icon: <LuGamepad2 size={26} />, title: "Gaming" },
  ];

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-10">

      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-2xl font-semibold mb-8 border-l-4 border-[#fac039] pl-3"
      >
        Browse by Category
      </motion.h2>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">

        {categories.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <CategoryCard icon={item.icon} title={item.title} />
          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default Category;