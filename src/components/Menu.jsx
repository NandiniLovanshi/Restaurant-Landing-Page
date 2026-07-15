import {
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

import pizza from "../assets/pizza.png";
import burger from "../assets/Burger.png";
import pasta from "../assets/pasta.png";
import steak from "../assets/steak.png";
import dessert from "../assets/dessert.png";
import salad from "../assets/salad.png";

const foods = [
  {
    id: 1,
    name: "Italian Pizza",
    image: pizza,
    price: "$18",
    rating: "4.9",
  },
  {
    id: 2,
    name: "Beef Burger",
    image: burger,
    price: "$15",
    rating: "4.8",
  },
  {
    id: 3,
    name: "Creamy Pasta",
    image: pasta,
    price: "$20",
    rating: "4.9",
  },
  {
    id: 4,
    name: "Grilled Steak",
    image: steak,
    price: "$28",
    rating: "5.0",
  },
  {
    id: 5,
    name: "Dessert",
    image: dessert,
    price: "$10",
    rating: "4.7",
  },
  {
    id: 6,
    name: "Fresh Salad",
    image: salad,
    price: "$12",
    rating: "4.8",
  },
];

const Menu = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#111111]">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="text-amber-400 uppercase tracking-widest">
            Our Menu
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            Popular Dishes
          </h2>

        <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-xl mx-auto">
            Choose from our chef's favorite dishes prepared with
            fresh ingredients every day.
          </p>

        </div>
                {/* Menu Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-10 sm:mt-16">

          {foods.map((food) => (

            <div
              key={food.id}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-amber-500/50 hover:-translate-y-3 transition-all duration-500"
            >

              {/* Image */}

              <div className="relative flex justify-center p-4 sm:p-6 lg:p-8">

                <div className="absolute w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-amber-500/10 blur-3xl"></div>

                <img
                  src={food.image}
                  alt={food.name}
                  className="relative z-10 w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 object-contain group-hover:scale-110 transition duration-500"
                />

              </div>

              {/* Content */}

              <div className="px-3 sm:px-5 lg:px-6 pb-4 sm:pb-6">

                <div className="flex justify-between items-center">

                  <h3 className="text-base sm:text-xl lg:text-2xl font-semibold">
                    {food.name}
                  </h3>

                  <span className="flex items-center gap-1 text-xs sm:text-sm lg:text-base text-amber-400">

                    <FaStar />

                    {food.rating}

                  </span>

                </div>

                <p className="text-gray-400 mt-3 text-xs sm:text-sm leading-6">
                  Fresh ingredients, premium taste and handcrafted recipes
                  made by our professional chefs.
                </p>

                <div className="flex justify-between items-center mt-6">

                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-400">
                    {food.price}
                  </h4>

                  <button className="bg-amber-500 hover:bg-amber-600 transition px-3 py-2 sm:px-5 sm:py-3 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-base font-medium">

                    Order

                    <FaArrowRight />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Menu;