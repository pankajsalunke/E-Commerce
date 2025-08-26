import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ICon from "../assets/ICon.avif";
import Search from "../assets/SVGs/Search";
import { Save } from "../assets/SVGs/Save";
import CartSVG from "../assets/SVGs/CartSVG";
import MenuSVG from "../assets/SVGs/MenuSVG";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-20">
      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-16 py-3">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src={ICon}
              className="rounded-full border-2 bg-yellow-300 hover:bg-yellow-500 cursor-pointer"
              width={40}
              alt="userProfile"
            />
          </Link>
          <Link to="/">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold hover:text-red-800 transition">
              EYESOME
            </h1>
          </Link>
        </div>

        {/* Search Bar (hidden on mobile) */}
        <div className="hidden sm:flex sm:w-1/3 relative">
          <form className="flex items-center bg-gray-100 px-3 rounded-full text-sm w-full">
            <input
              type="text"
              placeholder="Search Glasses"
              className="w-full py-2 px-3 bg-transparent focus:outline-none"
            />
            <Search />
          </form>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/products"
            className="px-3 py-1 shadow rounded-md text-white bg-yellow-700 text-sm hover:bg-yellow-800 transition"
          >
            Explore
          </Link>

          {/* Icons */}
          <div
            onClick={() => navigate("/wishlist")}
            className="bg-gray-200 p-2 rounded-full hover:bg-yellow-800 hover:text-white cursor-pointer transition shadow-sm"
          >
            <Save />
          </div>
          <div
            onClick={() => navigate("/cart")}
            className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-800 cursor-pointer transition shadow-sm"
          >
            <CartSVG />
          </div>

          {/* Login / Logout */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="ml-2 bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden cursor-pointer p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuSVG />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 shadow-lg px-4 py-6 space-y-4">
          {/* Search bar */}
          <form className="flex items-center bg-gray-100 px-3 rounded-full text-sm w-full">
            <input
              type="text"
              placeholder="Search Glasses"
              className="w-full py-2 px-3 bg-transparent focus:outline-none"
            />
            <Search />
          </form>

          {/* Links */}
          <Link
            to="/products"
            className="block w-full text-center px-3 py-2 rounded-md text-white bg-yellow-700 text-sm hover:bg-yellow-800 transition"
          >
            Explore
          </Link>

          {/* Icons */}
          <div className="flex justify-center space-x-4 text-2xl">
            <div
              onClick={() => navigate("/wishlist")}
              className="bg-gray-200 p-2 rounded-full hover:bg-yellow-800 hover:text-white cursor-pointer transition shadow-sm"
            >
              <Save />
            </div>
            <div
              onClick={() => navigate("/cart")}
              className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-800 cursor-pointer transition shadow-sm"
            >
              <CartSVG />
            </div>
          </div>

          {/* Login / Logout */}
          <div className="flex justify-center">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
