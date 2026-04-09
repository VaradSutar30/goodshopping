import React from "react";

const CategoryCard = ({ icon, title }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer hover:bg-[#fac039] hover:text-black transition-all duration-300 shadow-md hover:shadow-xl">

      <div className="mb-3 text-2xl">
        {icon}
      </div>

      <h4 className="text-sm font-medium">
        {title}
      </h4>

    </div>
  );
};

export default CategoryCard;