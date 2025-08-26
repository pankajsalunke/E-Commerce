import {Link} from "react-router-dom";
import Addbtn from "../assets/addicon.png";

function ProductCard({product}) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="flex flex-col p-4 rounded-xl bg-gray-200 shadow-md hover:shadow-lg transition cursor-pointer gap-3"
    >
      <div className="flex justify-between items-start w-full">
        <h1 className="text-base sm:text-lg font-semibold text-gray-800">
          {product.title}
        </h1>

        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-1">
            <span className="text-base sm:text-lg font-bold text-gray-900">
              ₹{product.price}
            </span>
            <button className="p-1 rounded-full bg-yellow-500 hover:bg-yellow-600 transition">
              <img
                src={Addbtn}
                alt="add"
                className="w-4 h-4"
              />
            </button>
          </div>
          <p className="text-gray-500 text-sm">{product.cname}</p>
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-28 sm:h-32">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 bg-transparent"
        />
      </div>
    </Link>
  );
}

export default ProductCard;
