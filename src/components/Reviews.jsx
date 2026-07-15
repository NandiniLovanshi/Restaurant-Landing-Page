import { FaStar } from "react-icons/fa";

import review1 from "../assets/review1.jpg";
import review2 from "../assets/review2.jpg";
import review3 from "../assets/review3.jpg";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: review1,
    review:
      "The food was absolutely delicious and the service was excellent. Highly recommended!",
  },
  {
    id: 2,
    name: "David Miller",
    image: review2,
    review:
      "Amazing atmosphere, premium quality food and very friendly staff.",
  },
  {
    id: 3,
    name: "Emily Brown",
    image: review3,
    review:
      "One of the best restaurants I've ever visited. Will definitely come again.",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0B0B0F]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-amber-400 text-sm">
            Testimonials
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mt-5 max-w-2xl mx-auto">
            Hear what our happy customers say about our delicious food and exceptional service.
          </p>

        </div>
                {/* Review Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {reviews.map((item) => (

            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-amber-500 hover:-translate-y-2 transition-all duration-500"
            >

              {/* User */}

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-amber-400"
                />

                <div>

                  <h3 className="text-lg sm:text-xl font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Happy Customer
                  </p>

                </div>

              </div>

              {/* Stars */}

              <div className="flex gap-1 text-amber-400 mt-5">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              {/* Review */}

              <p className="text-gray-300 text-sm sm:text-base leading-7 mt-5">
                "{item.review}"
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Reviews;