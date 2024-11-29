import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 py-6">
      <div className="container mx-auto text-center text-white px-6">
        {/* Footer Text */}
        <p className="text-sm md:text-base">
          Created By <strong>Vipul Kumar Tiwari</strong> | All Rights Reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/in/vipul-kumar-tiwari-459117272/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300 text-xl"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/tiwari786"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300 text-xl"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300 text-xl"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300 text-xl"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
