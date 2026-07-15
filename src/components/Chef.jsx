import chefImg from "../assets/chef.png";
import { FaAward, FaStar, FaUtensils } from "react-icons/fa";

const Chef = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-amber-400">
            Our Chef
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            Meet Our Master Chef
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-sm sm:text-base">
            Every meal is prepared with passion, premium ingredients and years
            of culinary experience.
          </p>
        </div>

        {/* Main Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}

          <div className="relative flex justify-center">

            {/* Glow */}

            <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-amber-500/20 rounded-full blur-[120px]" />

            <img
              src={chefImg}
              alt="Chef"
              className="relative z-10 w-[250px] sm:w-[340px] lg:w-[470px] object-contain"
            />

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm">
              👨‍🍳 Professional Chef
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Crafting Every Dish

              <span className="block text-amber-400">
                With Love & Passion
              </span>

            </h2>

            <p className="mt-6 text-gray-300 leading-8 text-sm sm:text-base">
              Our master chef has over 15 years of experience creating
              unforgettable dining experiences using fresh ingredients,
              premium recipes and modern cooking techniques.
            </p>

            {/* Cards */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-amber-400 transition">

                <FaAward className="text-amber-400 text-3xl mb-4" />

                <h3 className="text-xl font-bold">
                  15+
                </h3>

                <p className="text-gray-400 text-sm">
                  Years Experience
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-amber-400 transition">

                <FaStar className="text-yellow-400 text-3xl mb-4" />

                <h3 className="text-xl font-bold">
                  5000+
                </h3>

                <p className="text-gray-400 text-sm">
                  Happy Customers
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-amber-400 transition">

                <FaUtensils className="text-amber-400 text-3xl mb-4" />

                <h3 className="text-xl font-bold">
                  120+
                </h3>

                <p className="text-gray-400 text-sm">
                  Signature Dishes
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-amber-400 transition">

                <FaAward className="text-amber-400 text-3xl mb-4" />

                <h3 className="text-xl font-bold">
                  Award
                </h3>

                <p className="text-gray-400 text-sm">
                  Winning Chef
                </p>

              </div>

            </div>

            <button className="mt-10 bg-amber-500 hover:bg-amber-600 transition px-8 py-4 rounded-full font-semibold">
              Read More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Chef;