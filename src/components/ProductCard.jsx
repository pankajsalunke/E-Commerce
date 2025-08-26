import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-40 w-full object-cover rounded" />
      <h3 className="mt-2 font-semibold">{product.title}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <div className="mt-3 flex justify-between">
        <Link to={`/product/${product.id}`} className="text-indigo-600 hover:underline">View</Link>
        <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
