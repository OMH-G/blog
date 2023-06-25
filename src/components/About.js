import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 h-screen">
      <div className="max-w-3xl text-center text-white">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to our company! We are dedicated to providing exceptional services and products that exceed our clients' expectations.
        </p>
        <p className="text-lg mb-6">
          Our team consists of talented professionals who are passionate about delivering innovative solutions and achieving outstanding results.
        </p>
        <p className="text-lg mb-6">
          We strive to create long-lasting partnerships with our clients, focusing on their success and growth.
        </p>
        <button className="bg-white text-purple-500 hover:bg-purple-700 text-lg font-bold py-2 px-6 rounded-full shadow-lg">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
