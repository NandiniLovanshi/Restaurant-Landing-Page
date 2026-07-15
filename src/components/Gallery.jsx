import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpg";
import img5 from "../assets/gallery5.jpg";
import img6 from "../assets/gallery6.jpg";

const gallery = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

const Gallery = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#111111]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}

        <div className="text-center mb-10 sm:mb-16">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-amber-400 text-xs sm:text-sm">
            Gallery
          </p>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4">
            Delicious Food Gallery
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto px-2">
            Explore our signature dishes prepared fresh every day by our expert
            chefs.
          </p>

        </div>

        {/* Gallery Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">

          {gallery.map((image, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl cursor-pointer"
            >

              {/* Image */}

              <img
                src={image}
                alt={`Food ${index + 1}`}
                className="w-full h-32 sm:h-52 lg:h-80 object-cover transition-all duration-500 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">

                <div className="text-center px-2">

                  <h3 className="text-sm sm:text-xl font-bold text-white">
                    Delicious Food
                  </h3>

                  <p className="text-gray-300 text-[10px] sm:text-sm mt-2">
                    Fresh • Healthy • Tasty
                  </p>

                  <button className="mt-3 sm:mt-4 bg-amber-500 hover:bg-amber-600 transition px-3 py-2 sm:px-5 sm:py-2 rounded-full text-[10px] sm:text-sm font-medium">
                    View Dish
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

export default Gallery;