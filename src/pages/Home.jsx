import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img_2 from '../images/img_2.jpg';
import img_1 from '../images/img_1.png';
import { phoneAnimation } from 'animate/animation';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center flex items-center justify-center overflow-y-hidden"
      style={{
        backgroundImage: `url(${img_2})`,
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={phoneAnimation}
        className="h-screen flex items-center justify-center"
      >
        <div className="relative w-64 md:w-[280px]">
          <img
            className="w-full h-auto transform scale-140 md:scale-140 lg:scale-140 xl:scale-140"
            src={img_1}
            alt="phone"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl md:text-4xl  font-bold mb-8 text-black max-w-[80%] mx-auto">
              Welcome to Phonebook!
            </h1>
            <div className="flex flex-col items-center space-y-4">
              <Link
                className="btn btn-outline btn-info text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-[80%] mx-auto"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="btn btn-outline btn-warning text-lg px-9 md:text-xl lg:text-2xl xl:text-3xl max-w-[80%] mx-auto"
                to="/register"
              >
                Register
              </Link>
            </div>
            <p className="mt-8 text-lg md:text-xl xl:text-2xl text-black font-bold max-w-[80%] mx-auto">
              Easy to search & quick to save!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
