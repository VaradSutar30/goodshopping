import React, { useEffect, useState } from "react";
import Navbar from "../../components/User/Navbar";
import Footer from "../../components/User/Footer";
import CartProductCard from "../../components/User/CartProductCard";
import BlackBtn from "../../components/User/BlackBtn";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage
  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(savedCart);
  }, []);

  // Remove item
  const removeItem = (index) => {
    const updatedCart = [...cartItems];

    updatedCart.splice(index, 1);

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Total Price
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const discount = 0;
  const total = subtotal - discount;

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto pt-10 pb-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-xl font-semibold text-gray-600">
              Your cart is empty 🛒
            </h2>
          </div>
        ) : (
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
            
            {/* Cart Products Section */}
            <section className="lg:col-span-7 space-y-5">
              {cartItems.map((item, index) => (
                <div key={index} className="relative">
                  
                  <CartProductCard
                    name={item.title}
                    imagesrc={item.image}
                    price={item.price}
                    ram={item.ram || "8"}
                    ssd={item.storage || "128"}
                  />

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(index)}
                    className="mt-2 text-red-500 font-medium hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </section>

            {/* Order Summary */}
            <section className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5 h-fit">
              <h2 className="text-lg font-medium text-gray-900">
                Order Summary
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">
                    Subtotal
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ₹ {subtotal}
                  </dd>
                </div>

                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">
                    Discount
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ₹ {discount}
                  </dd>
                </div>

                <div className="border-t pt-4 flex justify-between">
                  <dt className="text-base font-medium text-gray-900">
                    Order Total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ₹ {total}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex justify-center">
                <BlackBtn
                  title="Checkout"
                  link="/checkout"
                />
              </div>
            </section>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Cart;