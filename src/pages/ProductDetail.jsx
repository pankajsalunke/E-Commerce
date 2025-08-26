import {useParams} from "react-router-dom";
import {trendingProducts} from "../data/products";

function ProductDetail() {
  const {id} = useParams();
  const product = trendingProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <h2 className="text-center mt-10 text-red-500">Product not found</h2>
    );
  }

  return (
    <div className="px-4 max-w-5xl mx-auto rounded-lg mt-20 py-3">
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="w-full sm:w-1/2 flex justify-center items-center bg-gray-100 rounded-lg p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-72 h-72 object-contain"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="flex items-center gap-2">
            <span className="text-gray-500">{product.rating} Rating</span>
          </div>

          <div className="mt-2">
            <h2 className="font-semibold text-lg">About Product</h2>
            <ul className="text-gray-700 text-sm mt-2 space-y-1">
              
              <li>
                <strong>Gender:</strong> {product.gender}
              </li>
              <li>
                <strong>Category:</strong> {product.cname}
              </li>
              
            </ul>
          </div>

          {/* Price */}
          <div className="mt-4">
            <span className="text-2xl font-bold text-yellow-600">
              ₹{product.price}
            </span>
            <span className="text-gray-500 line-through ml-2">
              ₹{product.price + 100}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
              Add to Bag
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Wishlist Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
