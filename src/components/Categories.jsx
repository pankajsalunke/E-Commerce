import Vision from "../assets/Vision.jpg";
import Sunglasses from "../assets/Sunglasses.jpg";
import Sports from "../assets/Sports.jpg";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Vision",
      image: Vision,
    },
    {
      id: 2,
      name: "Sports",
      image: Sports,
    },
    {
      id: 3,
      name: "Sunglasses",
      image: Sunglasses,
    },
  ];

  return (
    <section className="px-12 py-12">
      <h1 className="text-3xl md:text-4xl  break-words text-center mt-10 mb-4">
        Categories
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        {categories.map((c) => (
          <div
            key={c.id}
            className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-40">
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {c.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
