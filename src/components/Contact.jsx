import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-16 px-6 md:py-20 md:px-10 lg:px-20">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Contact
        </h2>

        {/* Contact Form */}
        <form className="max-w-2xl mx-auto space-y-6">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />

          {/* Message Input */}
          <textarea
            placeholder="Write Message Here..."
            rows="6"
            className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
