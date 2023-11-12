import React from 'react';
import { Link } from 'react-router-dom';
import img_2 from '../images/img_2.jpg';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center flex-wrap"
      style={{ backgroundImage: `url(${img_2})` }}
    >
      <div className="text-center px-4 flex-col rotate-1 mt-40  md:mt-40 lg:mt-80">
        <h1 className="max-w-[200px] text-3xl mb-6 md:text-6xl md:min-w-[200px] lg:text-7xl font-bold">
          Welcome to Phonebook!
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <Link
            className="btn btn-outline btn-info text-lg md:text-xl lg:text-2xl"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="btn btn-outline btn-warning text-lg md:text-xl lg:text-2xl mt-2 md:mt-0"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
      <div className=" rotate-1 md:mb-40">
        <p className=" mb-10 text-base md:text-lg lg:text-xl font-bold whitespace-normal">
          Easy to search & quick to save!
        </p>
      </div>
    </div>
  );
};

export default Home;
