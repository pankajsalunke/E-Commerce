import React from "react";
import {trendingProducts} from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <section className="grid  grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-14 mt-6 ">
      {trendingProducts.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
        />
      ))}
    </section>
  );
};

export default Products;
