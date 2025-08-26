import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import ICon from "../assets/ICon.avif";
import Search from "../assets/SVGs/Search";
import {Save} from "../assets/SVGs/Save";
import CartSVG from "../assets/SVGs/CartSVG";
import MenuSVG from "../assets/SVGs/MenuSVG";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-20">
      <div className="flex justify-between items-center px-4 sm:px-[6%] md:px-[10%] py-3">
        <section className="flex items-center">
          <Link to="/profile">
            <img
              src={ICon}
              className="rounded-full border-2 bg-yellow-300 hover:bg-yellow-500 cursor-pointer me-3"
              width={40}
              alt="userProfile"
            />
          </Link>
          <Link to="/">
            <div className="text-2xl font-bold sm:text-3xl hover:text-red-800 cursor-pointer transition">
              EYESOME
            </div>
          </Link>
        </section>

        <div className="hidden sm:flex sm:w-1/3 relative">
          <form className="flex items-center bg-black/10 px-3 rounded-full text-sm w-full">
            <input
              type="text"
              placeholder="Search Glasses"
              className="w-full py-2 px-3 bg-transparent focus:outline-none"
            />
            <Search />
          </form>
        </div>

        <section className="hidden md:flex items-center space-x-6">
          <Link
            to="/products"
            className="px-3 py-1 shadow-sm rounded-md text-white bg-yellow-700 text-sm hover:bg-yellow-800 transition"
          >
            Explore
          </Link>
          <ul className="flex items-center text-2xl space-x-3">
            <li
              onClick={() => navigate("/wishlist")}
              className="bg-gray-200 p-2 rounded-full hover:bg-yellow-800 hover:text-white cursor-pointer transition shadow-sm"
            >
              <Save />
            </li>
            <li
              onClick={() => navigate("/cart")}
              className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-800 cursor-pointer transition shadow-sm"
            >
              <CartSVG />
            </li>
          </ul>
        </section>

        <section
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuSVG />
        </section>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[--theme-color] px-4 pb-4 space-y-4">
          <form className="flex items-center bg-black/10 px-3 rounded-full text-sm w-full">
            <input
              type="text"
              placeholder="Search Glasses"
              className="w-full py-2 px-3 bg-transparent focus:outline-none"
            />
            <Search />
          </form>

          <Link
            to="/products"
            className="block w-full text-center px-3 py-2 rounded-md text-white bg-yellow-700 text-sm hover:bg-yellow-800 transition"
          >
            Explore
          </Link>

          <div className="flex justify-center space-x-4 text-2xl">
            <div className="bg-gray-200 p-2 rounded-full hover:bg-yellow-800 hover:text-white cursor-pointer transition shadow-sm">
              <Save />
            </div>
            <div className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-800 cursor-pointer transition shadow-sm">
              <CartSVG />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
