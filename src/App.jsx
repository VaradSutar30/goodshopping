// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/User/Navbar";
import NotFound from "./components/NotFound";

// Pages
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

// Optional Pages
const Home = () => (
  <div className="max-w-7xl mx-auto px-6 py-20 text-center">
    <h1 className="text-5xl font-bold text-gray-900 mb-8">
      Welcome to <span className="text-[#fac039]">Goodshopping</span>
    </h1>

    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      Your ultimate shopping destination. Browse products,
      add to cart and enjoy shopping.
    </p>
  </div>
);

const Details = () => (
  <div className="p-8 text-center text-2xl">
    Details Page
  </div>
);

const Catalog = () => (
  <div className="p-8 text-center text-2xl">
    Catalog Page
  </div>
);

const Orders = () => (
  <div className="p-8 text-center text-2xl">
    Orders Page
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        
        {/* Navbar */}
        <Navbar />

        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />

          {/* Products Page */}
          <Route path="/products" element={<Products />} />

          {/* Cart Page */}
          <Route path="/cart" element={<Cart />} />

          {/* Other Pages */}
          <Route path="/details" element={<Details />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/signup" element={<Signup />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;