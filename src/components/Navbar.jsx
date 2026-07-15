import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "Home",
    "Menu",
    "Chef",
    "Gallery",
    "Reviews",
    "Reservation",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4">

        <nav
          className={`flex items-center justify-between rounded-full px-6 py-4 transition-all duration-500 ${
            scrolled
              ? "bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg"
              : "bg-transparent"
          }`}
        >

          {/* Logo */}

          <h1 className="text-2xl lg:text-3xl font-bold text-amber-400 cursor-pointer">
            🍽 Foodie
          </h1>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-8">

            {links.map((item) => (
              <li
                key={item}
                className="cursor-pointer text-white hover:text-amber-400 transition"
              >
                {item}
              </li>
            ))}

          </ul>

          {/* Desktop Button */}

          <button className="hidden lg:block bg-amber-500 hover:bg-amber-600 transition px-7 py-3 rounded-full font-semibold">
            Reserve Table
          </button>

          {/* Mobile Icon */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </nav>

        {/* Mobile Menu */}

        <div
          className={`overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6">

            <ul className="flex flex-col gap-5">

              {links.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-white hover:text-amber-400 transition"
                >
                  {item}
                </li>
              ))}

            </ul>

            <button className="mt-6 w-full bg-amber-500 hover:bg-amber-600 transition py-3 rounded-full font-semibold">
              Reserve Table
            </button>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;