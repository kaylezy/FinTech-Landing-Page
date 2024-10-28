import Fire from "../../assets/fire.png";
import PhoneGroup from "../../assets/phone-group.png";
import Services from "../../assets/service.png";
import Analytic from "../../assets/analitic.png";
import Insight from "../../assets/insight.png";
import Tom from "../../assets/tomcard.png";
import TomCard from "../../assets/tomcardgroup.png";
import Dollar from "../../assets/dollar.png";
import Expenses from "../../assets/expenses.png";
import ArrowRight from "../../assets/arrow-right.png";

function Service() {
  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-8 overflow-x-hidden">
      {/* Header Section */}
      <div className="text-center max-w-[40rem] mb-8 md:mb-12">
        <div className="inline-flex items-center shadow-md border-[#014526] bg-white text-black rounded-full px-4 py-2 space-x-2 mb-4">
          <img src={Fire} alt="" className="w-4 h-4" aria-hidden="true" />
          <span className="text-sm font-medium uppercase text-black">
            Services
          </span>
        </div>
        <h1 className="text-center font-bold text-3xl md:text-5xl uppercase">
          Can help you achieve Financial Success
        </h1>
      </div>

      {/* First Card */}
      <div className="w-full max-w-[1124px] flex flex-col md:flex-row justify-around items-center px-4 md:px-10 py-10 md:py-[8.6rem] bg-[#F6F9F8] border rounded-md container relative mb-8">
        <img
          src={PhoneGroup}
          alt=""
          className="absolute top-6 md:top-0 md:left-20 w-full md:w-auto max-w-[280px] md:max-w-none transform -translate-y-1/4 md:translate-y-0"
        />
        <div className="md:pl-80 text-center md:text-left mt-52 md:mt-0">
          <img src={Services} alt="" className="mx-auto md:mx-0 mb-4 " />
          <p className="font-bold text-xl md:text-2xl">
            Transfer Across The Globe Are Free
          </p>
        </div>
      </div>

      {/* Second Card Group */}
      <div className="flex flex-col md:flex-row gap-8 mt-10 w-full max-w-[1124px]">
        <div className="bg-gray-100 w-full md:max-w-[34rem] rounded-lg p-6 relative py-16 md:py-10">
          <img src={Analytic} alt="" className="mb-4" />
          <p className="font-bold text-2xl md:text-3xl pb-4">
            Create A Card That Is <br />
            Unique And Customized
          </p>
          <p className="text-gray-500 max-w-[28rem]">
            We Offer A Comprehensive Range Of Innovative Financial Services
            Tailored To meet Your Needs. Our Services Include High-Yield Savings
            Accounts.
          </p>
          <div className="relative min-h-[200px] md:min-h-[300px]">
            <img
              src={Tom}
              alt=""
              className="absolute top-4 md:top-6 left-2/3  transform -translate-x-1/2 md:left-36 md:translate-x-0 w-48 md:w-60"
            />
          </div>
        </div>

        <div className="bg-[#001027] w-full md:max-w-[34rem] rounded-lg px-4 md:px-10 p-6 relative">
          <img src={Insight} alt="" className="mb-4" />
          <p className="font-bold text-2xl md:text-3xl pb-4 text-white max-w-[22rem]">
            Personalized Insights And Financial Goals
          </p>
          <p className="text-gray-500">
            Savings Accounts That Offer Competitive Interest Rates And Flexible
            Deposit Options. Investment Invest Wisely With Our Personalized. Our
            Services Include High-Yield Savings
          </p>
          <div className="relative min-h-[200px] md:min-h-[300px]">
            <img
              src={TomCard}
              alt=""
              className="absolute top-[4.3rem] left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 w-52 md:w-96"
            />
          </div>
        </div>
      </div>

      {/* Grid Cards */}
      <div className="w-full max-w-[1124px] grid grid-cols-1 md:grid-cols-3 pt-10 gap-4">
        <div className="bg-[#E2FF54] rounded-2xl border px-6 py-10">
          <p className="font-bold text-2xl md:text-3xl pb-2">
            100% <br />
            Dedication
          </p>
          <p className="text-gray-500">
            We Offer A Comprehensive Range Of Innovative Financial Services
            Tailored To Meet Your Needs.
          </p>
        </div>

        <div className="bg-[#F6F9F8] rounded-2xl border px-6 py-10 relative">
          <img src={Dollar} alt="" className="mb-4" />
          <p className="font-bold text-2xl md:text-3xl">
            Hold money in <br /> 30+ currencies
          </p>
          <div className="relative min-h-[100px] md:min-h-[150px]">
            <img
              src={Expenses}
              alt=""
              className="absolute -top-[2rem] right-0 md:left-36 w-36 md:w-48"
            />
          </div>
        </div>

        <div className="bg-[#2D907A] rounded-2xl border px-6 py-10 flex justify-center items-center">
          <p className="md:max-w-[15rem] font-bold text-2xl md:text-3xl text-center text-white">
            Visit Our Services page
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="relative mt-10 mb-8">
        <button className=" bg-white border hover:bg-green-600 text-black px-6 py-2 rounded-full inline-flex items-center space-x-2 transition-colors duration-200">
          <span>View More</span>

          <img
            src={ArrowRight}
            alt=""
            className="w-8 h-8 text-white  absolute left-28 bg-green-500 rounded-full p-1 ml-2"
          />
        </button>
      </div>
    </div>
  );
}

export default Service;
