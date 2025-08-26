import {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import {Routes, Route} from "react-router-dom";
import Products from "./pages/Products";
import Login from "./pages/Login";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-[4%] md:px-[10%] pb-2">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/products"
            element={<Products />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/wishlist"
            element={<Wishlist />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
