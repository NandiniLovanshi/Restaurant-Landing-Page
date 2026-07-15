import heroImg from "../assets/Hero.png";
import { FaArrowRight, FaStar, FaMotorcycle } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0B0B0F] flex items-center pt-16 sm:pt-20 lg:pt-24"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <span className="inline-block px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mt-15 text-sm">
            Premium Restaurant
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
  Taste The Best
  <span className="block text-amber-400">
    Delicious Food
  </span>
</h1>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-300 leading-6 sm:leading-7 max-w-xl">
  Fresh ingredients, handcrafted recipes, and unforgettable flavors.
  Experience premium dining prepared by our master chefs.
</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">

  <button className="bg-amber-500 hover:bg-amber-600 px-6 py-3 sm:px-7 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2">
    Explore Menu
    <FaArrowRight />
  </button>

  <button className="border border-white/20 hover:border-amber-400 px-6 py-3 sm:px-7 sm:py-4 rounded-full">
    Book Table
  </button>

</div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 sm:mt-14">

  <div>
    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-amber-400">
      4.9★
    </h2>

    <p className="text-xs sm:text-sm lg:text-base text-gray-400">
      Rating
    </p>
  </div>

  <div>
    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-amber-400">
      50+
    </h2>

    <p className="text-xs sm:text-sm lg:text-base text-gray-400">
      Dishes
    </p>
  </div>

  <div>
    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-amber-400">
      15+
    </h2>

    <p className="text-xs sm:text-sm lg:text-base text-gray-400">
      Chefs
    </p>
  </div>

</div>

        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center -mt-16 sm:-mt-8 lg:mt-0">

          {/* Glow */}

          <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] rounded-full bg-amber-500/20 blur-[120px]" />

          {/* Hero Image */}

          <img
  src={heroImg}
  alt="Food"
  className="relative z-10 -mt-5 sm:-mt-6 lg:mt-0 w-[220px] sm:w-[300px] md:w-[420px] lg:w-[560px] object-contain hover:scale-105 transition duration-500"
/>

          {/* Rating Card */}

          <div className="absolute top-4 left-0 hidden md:flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4">

            <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
              <FaStar className="text-white" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                4.9 Rating
              </h3>

              <p className="text-sm text-gray-300">
                5000+ Happy Customers
              </p>
            </div>

          </div>

          {/* Delivery Card */}

          <div className="absolute bottom-8 right-0 hidden md:flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4">

            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
              <FaMotorcycle className="text-white" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Free Delivery
              </h3>

              <p className="text-sm text-gray-300">
                Within 30 Minutes
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;