import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // Icons for Mobile Menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", path: "home" },
    { name: "Rules", path: "rules" },
    { name: "About", path: "about" },
    { name: "Contact Us", path: "contact" },
    { name: "Achievements", path: "achievements" },
    { name: "Prizes", path: "prizes" },
  ];

  return (
    <div className="bg-black/50 backdrop-blur-md shadow-lg rounded-lg mx-auto max-w-[1200px] mt-6 p-4 border-b-4 border-pink-500">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-2xl md:text-3xl text-pink-500 font-squid text-center tracking-wide drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
          CODEATHON
        </h2>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-white text-lg font-semibold">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  smooth={true}
                  duration={1000}
                  spy={true}
                  offset={-70}
                  activeClass="text-pink-400"
                  className="relative cursor-pointer font-squid hover:text-pink-400 transition duration-300"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-500 transition-all duration-300 hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-white text-lg font-semibold">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  smooth={true}
                  duration={300}
                  spy={true}
                  offset={-70}
                  activeClass="text-pink-400"
                  className="cursor-pointer font-squid hover:text-pink-400 transition duration-300"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
