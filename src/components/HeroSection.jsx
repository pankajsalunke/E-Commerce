import {Link} from "react-router-dom";
import BannerImage from "../assets/bannerImg.png";

const HeroSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center px-6 sm:px-10 lg:px-20 py-20 bg-white">
      <div className="text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-8xl font-semibold text-gray-900 leading-tight mb-4">
          Glasses & Lens
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Buy the best high-quality sunglasses from us. More than 100 types of
          eyewear available.
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <Link
            to={"/products"}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow-md"
          >
            Start Shopping
          </Link>
          <button className="border border-black px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
            Explore More
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={BannerImage}
          alt="Hero Glasses"
          className="w-3/4 sm:w-2/3 lg:w-full h-auto object-contain drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
