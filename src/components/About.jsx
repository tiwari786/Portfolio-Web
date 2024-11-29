import React from "react";
import AboutImg from "../assets/asset 1.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 py-16 px-6 md:py-20 md:px-10 lg:px-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* About Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={AboutImg}
            alt="Developer Illustration"
            className="w-3/4 md:w-full max-w-md"
          />
        </div>

        {/* About Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6 text-purple-500 dark:text-white">
            About Me
          </h2>
          <p className="max-w-2xl text-gray-600 dark:text-gray-300 mb-6 mx-auto md:mx-0 text-justify">
            As a web developer, I am passionate about creating visually
            appealing and user-friendly websites. With expertise in HTML, CSS,
            and JavaScript, I strive to deliver high-quality and responsive
            designs that meet the needs of my clients. I look forward to
            collaborating with you and bringing your web development projects
            to life. Feel free to explore my portfolio and get in touch with me
            to discuss your project requirements.
          </p>
          <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            <a
              href="https://drive.google.com/file/d/1Vdq6ySHBVHAo3rkaLZrepCcUSDrvUQ9k/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
