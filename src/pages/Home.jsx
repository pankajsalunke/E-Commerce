import React from "react";
import HeroSection from "../components/HeroSection";
import NewProducts from "../components/NewProducts";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <>
      <HeroSection />
      <NewProducts />
      <Categories />
    </>
  );
};

export default Home;
