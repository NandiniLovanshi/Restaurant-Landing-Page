import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0F] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-5 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-amber-400">
              Foodie
            </h2>

            <p className="text-gray-400 mt-5 leading-7 text-sm">
              Experience premium dining with fresh ingredients,
              handcrafted recipes and exceptional service.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 transition flex items-center justify-center"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#home" className="hover:text-amber-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#menu" className="hover:text-amber-400 transition">
                  Menu
                </a>
              </li>

              <li>
                <a href="#chef" className="hover:text-amber-400 transition">
                  Chef
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-amber-400 transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#reservation" className="hover:text-amber-400 transition">
                  Reservation
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-amber-400 mt-1" />
                <p>123 Food Street, New York</p>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="text-amber-400 mt-1" />
                <p>+1 234 567 890</p>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-amber-400 mt-1" />
                <p>info@foodie.com</p>
              </div>

            </div>

          </div>

          {/* Opening Hours */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Opening Hours
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <FaClock className="text-amber-400 mt-1" />
                <p>Mon - Fri : 10 AM - 10 PM</p>
              </div>

              <div className="flex gap-3">
                <FaClock className="text-amber-400 mt-1" />
                <p>Sat - Sun : 11 AM - 11 PM</p>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-12 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © 2026 Foodie Restaurant. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;