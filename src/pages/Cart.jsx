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
    <div className="px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Bag({cart.length})</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain"
                  />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-gray-500">₹{item.price}</p>

                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, "dec")}
                        className="px-2 border"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, "inc")}
                        className="px-2 border"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <p className="font-bold">₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 px-3 py-1 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white"
                  >
                    Remove from Bag
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="font-bold text-lg mb-4">Price Details</h2>
            {cart.map((item) => (
              <p
                key={item.id}
                className="text-gray-600"
              >
                {item.title} ({item.quantity} item) = ₹
                {item.price * item.quantity}
              </p>
            ))}
            <hr className="my-4" />
            <p className="text-lg font-bold">Total = ₹{totalPrice}</p>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
