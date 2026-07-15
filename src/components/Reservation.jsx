
import { FaCalendarAlt, FaClock, FaUserFriends } from "react-icons/fa";

const Reservation = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#111111]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="uppercase tracking-[4px] text-amber-400 text-sm">
            Reservation
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            Book Your Table
          </h2>

          <p className="text-gray-400 mt-5 text-sm sm:text-base max-w-2xl mx-auto">
            Reserve your table in just a few clicks and enjoy a premium dining
            experience with your family and friends.
          </p>

        </div>

        {/* Form Container */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10">

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none transition"
              />
            </div>

            {/* Date */}
            <div className="relative">

              <label className="block text-sm text-gray-300 mb-2">
                Date
              </label>

              <FaCalendarAlt className="absolute left-4 top-[46px] text-amber-400" />

              <input
                type="date"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none transition"
              />

            </div>

            {/* Time */}
            <div className="relative">

              <label className="block text-sm text-gray-300 mb-2">
                Time
              </label>

              <FaClock className="absolute left-4 top-[46px] text-amber-400" />

              <input
                type="time"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none transition"
              />

            </div>

            {/* Guests */}
            <div className="relative md:col-span-2">

              <label className="block text-sm text-gray-300 mb-2">
                Number of Guests
              </label>

              <FaUserFriends className="absolute left-4 top-[46px] text-amber-400" />

              <input
                type="number"
                placeholder="2 Guests"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none transition"
              />

            </div>

            {/* Button */}
            <div className="md:col-span-2">

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 transition-all duration-300 py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-amber-500/30"
              >
                Book Now
              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Reservation;