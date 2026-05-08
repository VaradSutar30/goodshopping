import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";

// Images
import Samsung22 from "../../assets/products/samsungS22Ultra.jpg";
import Samsung24 from "../../assets/products/samsungS24Ultra.jpg";
import Nothingphoneblack from "../../assets/products/nothing2ablack.jpg";
import Nothingphone2a from "../../assets/products/Nothing-Phone-2a-White.png";
import GalaxyBookPro from "../../assets/products/galaxybook.jpg";
import SmartWatch from "../../assets/products/smartwatch.png";
import Laptop from "../../assets/img/laptop.png";
import AirPodsImage from "../../assets/img/iphone15.png";
import vivo from "../../assets/products/vivo.jfif";
import vivo2 from "../../assets/products/vivo2.jfif";

function Products() {
  const [activeTab, setActiveTab] = useState("All");

  const products = [
    {
      id: 1,
      title: "Galaxy S22 Ultra",
      price: 90000,
      image: Samsung22,
      category: "Mobile",
    },
    {
      id: 2,
      title: "Galaxy S24 Ultra",
      price: 120000,
      image: Samsung24,
      category: "Mobile",
    },
    {
      id: 3,
      title: "Lenovo Flex 5i",
      price: 70000,
      image: Laptop,
      category: "Laptop",
    },
    {
      id: 4,
      title: "Nothing Phone 2a",
      price: 30000,
      image: Nothingphone2a,
      category: "Mobile",
    },
    {
      id: 5,
      title: "Galaxy Book Pro",
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
      price: 4000,
      image: AirPodsImage,
      category: "Accessories",
    },
    {
      id: 8,
      title: "Smart Watch",
      price: 5000,
      image: SmartWatch,
      category: "Accessories",
    },
    {
      id: 9,
      title: "Vivo Y300",
      price: 23999,
      image: vivo,
      category: "Mobile",
    },
    {
      id: 10,
      title: "Vivo T4x",
      price: 24999,
      image: vivo2,
      category: "Mobile",
    },
  ];

  const tabs = ["All", "Mobile", "Laptop", "Accessories"];

  const filteredProducts = useMemo(() => {
    if (activeTab === "All") return products;
    return products.filter(
      (product) => product.category === activeTab
    );
  }, [activeTab]);

  // Add to Cart
  const handleAddToCart = (product) => {
    let cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert(`${product.title} added to cart`);
  };

  return (
    <div className="max-w-[1500px] mx-auto px-4 py-10">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
        New Arrivals
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              activeTab === tab
                ? "bg-yellow-400 text-black shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() =>
              handleAddToCart(product)
            }
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">
            No products found.
          </p>
        </div>
      )}
    </div>
  );
}

export default Products;