import React, { useEffect, useState } from "react";

function Checkout() {
  const [product, setProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] =
    useState("");

  useEffect(() => {
    const savedProduct = JSON.parse(
      localStorage.getItem("buyNowProduct")
    );

    setProduct(savedProduct);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = () => {
  if (!paymentMethod) {
    alert("Please select payment method");
    return;
  }

  // Cash on Delivery
  if (paymentMethod === "Cash on Delivery") {
    alert("Order Placed Successfully ✅ COD Selected");
    return;
  }

  // Razorpay Online Payment
  const options = {
    key: "YOUR_RAZORPAY_KEY_ID", 
    amount: product.price * 100, 
    currency: "INR",
    name: "Goodshopping",
    description: product.title,

    image: product.image,

    handler: function (response) {
      alert(
        "Payment Successful ✅ Payment ID: " +
          response.razorpay_payment_id
      );
    },

    prefill: {
      name: formData.name,
      contact: formData.phone,
    },

    theme: {
      color: "#fac039",
    },
  };

  const razor = new window.Razorpay(options);
  razor.open();
};
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">

      {/* Address Form */}
      <div className="bg-white shadow-lg p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">
          Delivery Address
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Full Address"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 shadow-lg p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">
          Order Summary
        </h2>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 object-contain"
        />

        <h3 className="font-semibold mt-4 text-lg">
          {product.title}
        </h3>

        <p className="text-xl font-bold text-yellow-500 mt-2">
          ₹{product.price}
        </p>

        {/* Payment Options */}
        <div className="mt-6">
          <h4 className="font-semibold mb-4">
            Select Payment Method
          </h4>

          <div className="space-y-3">

            <label className="block border p-3 rounded cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="Google Pay"
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              <span className="ml-2">Google Pay</span>
            </label>

            <label className="block border p-3 rounded cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="PhonePe"
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              <span className="ml-2">PhonePe</span>
            </label>

            <label className="block border p-3 rounded cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="Paytm"
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              <span className="ml-2">Paytm</span>
            </label>

            <label className="block border p-3 rounded cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="Credit/Debit Card"
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              <span className="ml-2">
                Credit / Debit Card
              </span>
            </label>

            <label className="block border p-3 rounded cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="Cash on Delivery"
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              />
              <span className="ml-2">
                Cash on Delivery
              </span>
            </label>
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;