import ProductCard from "./ProductCard";

const trendingProducts = [
  {
    id: 1,
    title: "Aviar Aviator",
    price: 1999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Hip Hop Candy",
    price: 1499,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Rounded Gold",
    price: 1599,
    image: "https://via.placeholder.com/150",
  },
];

function NewProducts() {
  return (
    <section className="px-10 py-12 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Trending Products</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingProducts.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
          />
        ))}
      </div>
    </section>
  );
}
export default NewProducts;
