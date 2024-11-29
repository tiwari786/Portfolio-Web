import React, { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "@fontsource/poppins/700.css";

const Header = ({ darkMode, setDarkMode }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="bg-white z-20 dark:bg-gray-900 shadow-md py-4 px-6 md:px-10 lg:px-[10rem] fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-500 dark:text-purple-500 cursor-pointer">
          PORTFOLIO
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-8 font-bold">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-500"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl focus:outline-none transition duration-500 ease-in-out ml-4 md:ml-0"
        >
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-500" />}
        </button>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="text-2xl focus:outline-none md:hidden ml-4"
        >
          {isMobileNavOpen ? <FaTimes className="text-gray-700 dark:text-gray-300" /> : <FaBars className="text-gray-700 dark:text-gray-300" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileNavOpen && (
        <nav className="flex md:hidden mt-4">
          <ul className="flex flex-col space-y-2 w-full">
            <li>
              <a
                href="#home"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-500"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
