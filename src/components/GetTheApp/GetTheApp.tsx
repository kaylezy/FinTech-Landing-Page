import ArrowRight from "../../assets/arrow-right.png";
import MobileGroup from "../../assets/group-phone.png";

function GetTheApp() {
  return (
    <div className="max-w-[1140px] mx-auto flex flex-col lg:flex-row bg-gradient-to-br from-blue-950 to-teal-800 p-6 md:px-16 md:py-16 mt-4 rounded-2xl">
      <div className="text-white md:pt-32 px-4 md:px-18">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl max-w-[30rem] pb-6 uppercase">
          Are you ready to start?
        </h1>
        <p className="max-w-[32rem] text-base md:text-lg">
          Personalize your settings, follow your progress, archive your
          highlights and notes automatically Glose is the ultimate reading
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
      <div className="relative mt-12 lg:mt-0 lg:pl-10">
        <img
          src={MobileGroup}
          alt="Mobile devices"
          className="lg:absolute lg:max-w-2xl mx-auto object-contain top-2 -mb-6"
        />
      </div>
    </div>
  );
}

export default GetTheApp;
