import React from "react";
import {trendingProducts} from "../data/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="mt-20 py-2">
      <h1 className="text-xl text-black font-semibold font-serif">Products for you!</h1>

      <div className="grid  grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 mt-2 ">
        {trendingProducts.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
