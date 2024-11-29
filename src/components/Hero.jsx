import React from 'react';
import DevImg from '../assets/asset 0.png';

const Hero = () => {
  return (
    <section id="home" className="bg-white dark:bg-gray-900 py-16 px-6 md:py-20 md:px-10 lg:px-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Social Links */}
        <div className="flex md:flex-col justify-center md:justify-start p-4 md:p-16 space-x-4 md:space-x-0 md:space-y-4 text-xl">
          <a
            href="https://www.linkedin.com/in/vipul-kumar-tiwari-459117272/"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-500"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/tiwari786"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-500"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-500"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-500"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        {/* Hero Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Hello, I'm <br />
            <span className="text-purple-600 dark:text-purple-400">Vipul Kumar Tiwari</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-4 text-gray-800 dark:text-gray-300">
            Frontend Developer
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            I design web applications for my clients and company. If you want to make your website, contact me.
          </p>
          <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600">
            Contact Me
          </button>
        </div>

        {/* Developer Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={DevImg}
            alt="Developer Illustration"
            className="w-3/4 md:w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
