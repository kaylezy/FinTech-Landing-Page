import UpgradePhone from "../../assets/upgrade-phone.png";
import Fire from "../../assets/fire.png";
import ArrowRight from "../../assets/arrow-right.png";

const Trustworthy = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around bg-gradient-to-br from-blue-950 to-teal-800 px-4 md:px-16 py-10 md:py-20">
      <div className="w-full md:w-auto mb-8 md:mb-0">
        <img
          src={UpgradePhone}
          alt="Upgrade Phone"
          className="max-w-full h-auto mx-auto"
        />
      </div>

      <div className="w-full md:w-1/2">
        <div>
          <div className="inline-flex items-center border border-[#014526] bg-[#003B47] text-white rounded-full px-4 py-2 space-x-2 mb-4">
            <img src={Fire} alt="" className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium uppercase text-white">
              Trustworthyness
            </span>
          </div>

          <h1 className="max-w-md text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase leading-tight tracking-wide">
            We value your trust and security
          </h1>

          <p className="max-w-[38rem] pt-4 text-white text-base md:text-lg">
            Our Mission is To Make Finance More Accessible, Transparent, And
            Secure For Everyone. With Cutting.
          </p>

          <div className="relative mt-10">
            <button className="bg-[#00b512] hover:bg-green-600 text-white px-6 py-2 rounded-full inline-flex items-center space-x-2 transition-colors duration-200">
              <span>Get Started</span>
              <div className="bg-white rounded-full absolute lg:left-[7rem] left-28 p-1 ml-2">
                <img src={ArrowRight} alt="" className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trustworthy;
