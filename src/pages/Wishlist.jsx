import React, {useEffect, useState} from "react";
import {trendingProducts} from "../data/products";
import {useNavigate} from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const wishlistItems = trendingProducts.filter((p) => wishlist.includes(p.id));

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="py-20">
      <h1 className="text-2xl font-bold mb-6">Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col justify-between"
            >
              <div className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-40 h-40 object-contain"
                />
              </div>

              <div className="mt-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-500">{product.brand || "Ray-Ban"}</p>
                <p className="flex items-center text-sm mt-1">
                  <span className="text-yellow-500 mr-1">★</span>
                  {product.rating}{" "}
                  <span className="ml-1 text-gray-500">Rating</span>
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl font-bold text-orange-600">
                    ₹{product.price}
                  </span>
                  <span className="text-gray-400 line-through">
                    ₹{product.price + 100}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <button className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-yellow-500 hover:text-white transition">
                  Add to Bag
                </button>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="text-red-500 text-xl"
                >
                  ♥
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
