import LogoMark from "../../assets/Logomark.png";
import Samsung from "../../assets/samsung.png";
import Visalogo from "../../assets/visa-logo1.png";
import Amazon from "../../assets/amazon.png";
import Paypal from "../../assets/Paypal.png";
import Alipay from "../../assets/airplay.png";

const Brands = () => {
  const brands = [
    { image: Samsung, name: "samsung" },
    { image: Visalogo, name: "visalogo" },
    { image: Amazon, name: "amazon" },
    { image: Paypal, name: "paypal" },
    { image: Alipay, name: "alipay" },
  ];

  return (
    <div className="bg-green-700 py-6  z-99">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container for all content */}
        <div className="flex justify-around">
          {/* Logo and name - always on top on mobile, left side on desktop */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold">
            <img
              src={LogoMark}
              alt="logomark"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <p className="text-lg md:text-xl">Spherule</p>
          </div>

          {/* Brands grid - 3 columns on mobile, row on desktop */}
          <div className="grid grid-cols-3 gap-6 md:flex md:items-center md:gap-8 lg:gap-12">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-20 h-auto max-h-8 object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
