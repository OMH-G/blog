import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiInfo } from 'react-icons/fi'; // Import icons from react-icons library

const Header = () => {
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="text-gray-600 body-font bg-gradient-to-r from-teal-400 to-coral-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mr-5 hover:text-gray-900"
          >
            <Link to="/blog">
              <FiHome className="inline-block mr-1" /> Home
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mr-5 hover:text-gray-900"
          >
            <Link to="/about">
              <FiInfo className="inline-block mr-1" /> About
            </Link>
          </motion.div>
        </nav>
        <motion.a
          initial="hidden"
          animate="visible"
          variants={logoVariants}
          transition={{ duration: 0.6 }}
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-green-500 bg-green-200 rounded-full"
            viewBox="0 0 24 24"
          >
            <motion.path d="M12 2L7 6.5 12 11l5-4.5L12 2z" />
  <motion.path d="M12 22V11" />
          
          </motion.svg>
          <span className="ml-3 text-xl">Dawn</span>
        </motion.a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          {/* Additional content can be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
