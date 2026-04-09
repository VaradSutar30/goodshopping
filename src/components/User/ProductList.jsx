import React, { useState } from "react";
import ProductCard from "./ProductCard";

import Samsung22 from "../../assets/products/samsungS22Ultra.jpg";
import Samsung24 from "../../assets/products/samsungS24Ultra.jpg";
import Nothingphoneblack from "../../assets/products/nothing2ablack.jpg";
import Nothingphone2a from "../../assets/products/Nothing-Phone-2a-White.png";
import GalaxyBookPro from "../../assets/products/galaxybook.jpg";
import SmartWatch from "../../assets/products/smartwatch.png";
import Laptop from "../../assets/img/laptop.png";
import iphone15 from "../../assets/img/iphone15.png";

function Products() {

  const [activeTab, setActiveTab] = useState("All");

  // 🔥 Dynamic Data
  const products = [
    {
      id: 1,
      title: "Galaxy S22 Ultra | 12GB RAM | 256GB",
      price: 90000,
      image: Samsung22,
      category: "Mobile",
    },
    {
      id: 2,
      title: "Galaxy S24 Ultra | 12GB RAM | 512GB",
      price: 120000,
      image: Samsung24,
      category: "Mobile",
    },
    {
      id: 3,
      title: "Lenovo Flex 5i | i5 | 8GB | 512GB",
      price: 70000,
      image: Laptop,
      category: "Laptop",
    },
    {
      id: 4,
      title: "Nothing Phone 2a | 12GB RAM",
      price: 30000,
      image: Nothingphone2a,
      category: "Mobile",
    },
    {
      id: 5,
      title: "Galaxy Book Pro | i5 | 8GB",
      price: 85000,
      image: GalaxyBookPro,
      category: "Laptop",
    },
    {
      id: 6,
      title: "Nothing Phone Black",
      price: 28000,
      image: Nothingphoneblack,
      category: "Mobile",
    },
    {
      id: 7,
      title: "Samsung AirPods",
      price: 40000,
      image: iphone15,
      category: "Accessories",
    },
    {
      id: 8,
      title: "Smart Watch",
      price: 5000,
      image: SmartWatch,
      category: "Accessories",
    },
  ];

  // FILTER LOGIC
  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((p) => p.category === activeTab);

  const tabs = ["All", "Mobile", "Laptop", "Accessories"];

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-10">

      {/* HEADER */}
      <div className="flex flex-wrap items-center justify-between mb-6">

        <h2 className="text-xl md:text-2xl font-semibold border-l-4 border-[#fac039] pl-3">
          New Arrivals
        </h2>

        {/* FILTER TABS */}
        <div className="flex gap-3 mt-3 md:mt-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 rounded-full text-sm transition ${
                activeTab === tab
                  ? "bg-[#fac039] text-black"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            imageSrc={product.image}
            onAddToCart={() => console.log("Added:", product.title)}
          />
        ))}

      </div>
    </div>
  );
}

export default Products;