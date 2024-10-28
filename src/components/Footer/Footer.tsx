import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../../assets/footer-logo.png";
import IOS from "../../assets/ios.png";
import Android from "../../assets/android.png";

const Footer = () => {
  const navigationLinks = [
    "Personal Loan",
    "One Card",
    "Savings",
    "Checking",
    "Contact",
    "Help",
    "Support",
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms & Condition",
    "Cookie Notice",
    "Copyright Policy",
    "Data Policy",
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "#" },
    { icon: FaFacebookF, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
  ];

  return (
    <footer className="w-full bg-white py-10 px-4 pt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">
        {/* Logo */}
        <div className="flex flex-col items-center space-y-4">
          <img src={Logo} alt="Upgrade Logo" className="h-10" />

          {/* App Store Buttons */}
          <div className="flex space-x-4">
            <img src={IOS} alt="Download on App Store" className="h-10" />
            <img src={Android} alt="Get it on Google Play" className="h-10" />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navigationLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-600 hover:text-gray-900"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {socialLinks.map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              className="bg-green-700 text-white rounded-full p-2 hover:text-green-100"
              title="Follow us on Twitter"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Feedback Email */}
        <div className="text-gray-600 text-sm">
          <span className="font-bold">Send Your Feedback :</span> moc.edargpu@tcatnoc
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {legalLinks.map((link, index) => (
            <React.Fragment key={link}>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                {link}
              </a>
              {index < legalLinks.length - 1 && (
                <span className="text-gray-600">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-gray-600 text-sm">
          © 2024 Design Monks. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
