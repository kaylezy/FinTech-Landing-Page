import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import logo from "../../assets/logo.png";
import { homeLinks } from "../../lib/constants";
import BgPattern from "../../assets/bg-pattern.png";
import Fire from "../../assets/fire.png";
import MobileGroup from "../../assets/mobile-group.png";
import ArrowRight from "../../assets/arrow-right.png";

const Navigation = ({ isMobile = false, onItemClick = () => {} }) => (
  <nav
    className={`${
      isMobile ? "flex flex-col gap-6" : "hidden lg:flex items-center gap-8"
    }`}
  >
    <ul
      className={`flex ${isMobile ? "flex-col gap-6" : "items-center gap-8"}`}
    >
      {homeLinks.map((item) => (
        <li key={item.label}>
          <Link
            to={item.route}
            onClick={onItemClick}
            className="text-white hover:text-green-500 transition-colors duration-200 font-medium"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950 to-teal-800 backdrop-blur-sm">
        {/* Mobile menu now inherits the main background */}
      </div>
      <div className="relative flex flex-col h-full">
        <div className="flex justify-end p-6">
          <button
            onClick={onClose}
            className="p-2 text-white hover:bg-teal-800/50 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 p-6">
          <Navigation isMobile onItemClick={onClose} />
          <NavLink to="/#" onClick={onClose} className="mt-8">
            <Button className="w-full px-8 py-2 bg-transparent border hover:bg-teal-800/50">
              Sign In
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

function RootLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-950 to-teal-800">
      {/* Background pattern that scrolls with content */}
      <div className="absolute inset-0 z-0">
        <img
          src={BgPattern}
          alt=""
          className="w-full h-full object-cover opacity-90"
          aria-hidden="true"
        />
      </div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Header */}
        <header className=" z-40">
          <div className="border-b border-teal-800/30">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Link to="/" className="flex items-center">
                    <img src={logo} alt="Fintech Logo" className="h-8 w-auto" />
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-72">
                  <Navigation />
                  <NavLink to="/#">
                    <Button className="px-6 border bg-transparent hover:bg-teal-800/50 transition-colors">
                      Sign In
                    </Button>
                  </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 rounded-md hover:bg-teal-800/50 text-white transition-colors"
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Main Content */}
        <main>
          {/* Home content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 py-12 lg:py-20">
              {/* Content Section */}
              <div className="flex-1 space-y-6">
                {/* Trusted Platform Badge */}
                <div className="inline-flex items-center bg-gray-600/90 text-white rounded-full px-4 py-2 space-x-2">
                  <img
                    src={Fire}
                    alt=""
                    className="w-4 h-4"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium uppercase">
                    100% Trusted Platform
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase leading-tight tracking-wide max-w-[500px]">
                  finance with security and{" "}
                  <span className="text-[#ccff00]">flexibility</span>
                </h1>

                {/* Sub Text */}
                <div className="text-gray-300 space-y-2">
                  <p>No-Fee Checking Account With Cash Back Rewards.</p>
                  <p className="max-w-lg">
                    Enjoy Fee-Free Banking And Earn Cash Back On Your <br />
                    Everyday Purchases.
                  </p>
                </div>

                {/* CTA Button */}
                <button className="bg-[#00b512] hover:bg-green-600 text-white px-6 py-2 rounded-full inline-flex items-center space-x-2 transition-colors">
                  <span>Open Account</span>
                  <span className="bg-white rounded-full absolute lg:left-72 left-36 py-1 px-1">
                    <img src={ArrowRight} alt="" />
                  </span>
                </button>
              </div>

              {/* Image Section */}
              <div className="relative mt-12 lg:mt-0">
                <div className="lg:transform lg:scale-110">
                  <img
                    src={MobileGroup}
                    alt="Mobile devices"
                    className="w-full max-w-2xl mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional content from routes will render here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
