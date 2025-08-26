import {useState} from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="px-[4%] md:px-[10%] pb-2">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
