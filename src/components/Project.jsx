import React, { useState } from "react";
import p1 from "../assets/asset 3.png";
import p2 from "../assets/asset 6.png";
import p3 from "../assets/asset 7.png";
import p4 from "../assets/asset 8.png";
import { FaLink } from "react-icons/fa";

// Sample portfolio data
const portfolioData = [
  { id: 1, title: "Project 1", category: "Website", image: p1 },
  { id: 2, title: "Project 3", category: "Website", image: p2 },
  { id: 3, title: "Project 4", category: "Application", image: p3 },
  { id: 4, title: "Project 5", category: "Website", image: p4 },
];

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredPortfolio =
    activeFilter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="bg-white dark:bg-gray-900 py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
          Projects
        </h2>

        {/* Filter buttons */}
        <div className="flex justify-center mb-8 flex-wrap gap-4">
          {["All", "Website", "Application"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full border-2 border-purple-500 dark:border-purple-400 ${
                activeFilter === filter
                  ? "bg-purple-500 dark:bg-purple-400 text-white"
                  : "bg-white dark:bg-gray-800 text-purple-500 dark:text-purple-400"
              } transition duration-300`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-64 object-cover transition-opacity duration-300 ${
                  hoveredItem === item.id ? "opacity-50" : "opacity-100"
                }`}
              />
              {hoveredItem === item.id && (
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-white text-xl font-bold cursor-pointer transition-opacity duration-300 z-10"
                >
                  <FaLink className="mr-2" /> View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
