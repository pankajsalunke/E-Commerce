import ProductCard from "./ProductCard";
import {trendingProducts} from "../data/products";

// const trendingProducts = [
//   {
//     id: 1,
//     title: "Aviar Aviator",
//     price: 1999,
//     image:
//       "https://eyesome.netlify.app/static/media/sports1.f986df729a29a685f835.png",
//     cname: "sports",
//   },
//   {
//     id: 2,
//     title: "Hip Hop Candy",
//     price: 1499,
//     image:
//       "https://eyesome.netlify.app/static/media/sports2.8f34b9326f093dc9cf0d.png",
//     cname: "sunglasses",
//   },
//   {
//     id: 3,
//     title: "Rounded Gold",
//     price: 1599,
//     image:
//       "https://eyesome.netlify.app/static/media/sports3.88be7fae1effd927c7cd.png",
//     cname: "vision",
//   },
//   {
//     id: 4,
//     title: "Aviar Aviator",
//     price: 1999,
//     image:
//       "	https://eyesome.netlify.app/static/media/sun5.3c6e9349bf4c9fc9ce70.png",
//     cname: "vision",
//   },
//   {
//     id: 5,
//     title: "Hip Hop Candy",
//     price: 1499,
//     image:
//       "	https://eyesome.netlify.app/static/media/sports7.99c95c59ac7a9c588366.png",
//     cname: "vision",
//   },
//   {
//     id: 6,
//     title: "Rounded Gold",
//     price: 1599,
//     image:
//       "https://eyesome.netlify.app/static/media/sports8.2e04c613e3b4def2ec69.png",
//     cname: "sunglasses",
//   },
//   {
//     id: 7,
//     title: "Rounded Gold",
//     price: 1599,
//     image:
//       "	https://eyesome.netlify.app/static/media/vision2.611b59463c103d118f9a.png",
//     cname: "sports",
//   },
// ];

function NewProducts() {
  return (
    <section className="grid  grid-cols-1 xs:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-4 py-4 mt-6 ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl  break-words flex items-center ">
        Trending Products
      </h1>

      {trendingProducts.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
        />
      ))}
    </section>
  );
}
export default NewProducts;
