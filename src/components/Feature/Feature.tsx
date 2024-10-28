import Fire from "../../assets/fire.png";
import ArrowRight from "../../assets/arrow-right.png";
import PhoneCard1 from "../../assets/phone-card1.png";
import PhoneCard2 from "../../assets/phone-card2.png";

interface BadgeProps {
  icon: string;
  text: string;
}

const Badge = ({ icon, text }: BadgeProps) => (
  <div className="inline-flex items-center bg-gray-100 border rounded-full px-4 py-2 space-x-2 max-w-[8rem]">
    <img src={icon} alt="" className="w-4 h-4" aria-hidden="true" />
    <span className="text-sm font-medium uppercase text-black">{text}</span>
  </div>
);

import { ReactNode } from "react";

interface BulletPointProps {
  children: ReactNode;
}

const BulletPoint = ({ children }: BulletPointProps) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gray-500" />
    <p className="flex-1 text-gray-600">{children}</p>
  </div>
);

function Feature() {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-20 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row lg:justify-around gap-12 lg:gap-20">
        {/* Content Section */}
        <div className="flex flex-col gap-6 md:pt-12">
          <Badge icon={Fire} text="featured" />

          <h1 className="max-w-sm text-3xl md:text-4xl font-bold text-black uppercase leading-tight tracking-wide">
            All the features in one app
          </h1>

          <div className="flex flex-col gap-4">
            <div className="max-w-md space-y-4">
              <BulletPoint>
                Get 30% Cash Back On Every Purchase, 2% On <br />
                Everything Else4
              </BulletPoint>
              <BulletPoint>
                Extra Spending Power When You Have Rewards Checking Through
                Upgrad6
              </BulletPoint>
            </div>

            <div className="relative w-fit mt-4">
              <button className="group bg-white border-2 border-green-600 hover:bg-green-600 hover:text-white text-black font-bold px-6 py-2 rounded-full inline-flex items-center transition-all duration-300">
                <span>Get Started</span>
                <span className="absolute -right-6 bg-green-600 rounded-full p-1 group-hover:bg-white transition-colors duration-300">
                  <img
                    src={ArrowRight}
                    alt=""
                    className="w-8 h-8"
                    aria-hidden="true"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Phone Images Section */}
        <div className="bg-gray-200 border rounded-[2rem] p-4 md:p-8 w-full lg:w-auto">
          <div className="flex justify-center gap-4 md:gap-12 lg:gap-20">
            <div className="relative w-1/2 lg:w-auto">
              <img
                src={PhoneCard2}
                alt="Phone feature preview 1"
                className="w-full h-auto mt-12 md:mt-20"
              />
            </div>
            <div className="relative w-1/2 lg:w-auto">
              <img
                src={PhoneCard1}
                alt="Phone feature preview 2"
                className="w-full h-auto mb-12 md:mb-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
