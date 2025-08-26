import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (id, type) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        if (type === "inc") return {...item, quantity: item.quantity + 1};
        if (type === "dec" && item.quantity > 1)
          return {...item, quantity: item.quantity - 1};
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="px-4 sm:px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Bag ({cart.length})</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-contain"
                  />
                  <div className="text-center sm:text-left">
                    <h2 className="font-semibold text-base sm:text-lg">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 text-sm">₹{item.price}</p>

                    <div className="flex items-center justify-center sm:justify-start mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, "dec")}
                        className="px-2 py-1 border rounded-l-md hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-t border-b">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, "inc")}
                        className="px-2 py-1 border rounded-r-md hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center sm:items-end mt-4 sm:mt-0">
                  <p className="font-bold text-base sm:text-lg">
                    ₹{item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 px-3 py-1 border border-red-500 text-red-500 rounded-lg text-sm hover:bg-red-500 hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="font-bold text-lg mb-4">Price Details</h2>
            <div className="space-y-2">
              {cart.map((item) => (
                <p
                  key={item.id}
                  className="text-gray-600 text-sm"
                >
                  {item.title} ({item.quantity}) = ₹{item.price * item.quantity}
                </p>
              ))}
            </div>
            <hr className="my-4" />
            <p className="text-lg font-bold">Total = ₹{totalPrice}</p>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
