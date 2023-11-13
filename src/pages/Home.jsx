import React from 'react';
import { Link } from 'react-router-dom';
import img_2 from '../images/img_2.jpg';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center flex-wrap"
      style={{ backgroundImage: `url(${img_2})` }}
    >
      <div className="text-center max-w-[220px] px-4 flex-col items-center rotate-1 mt-40 mb-4 md:px-2 md:justify-center md:min-w-[260px] xl:min-w-[280px]">
        <h1 className=" text-4xl mb-12  lg:text-4xl  font-bold xl:text-5xl  ">
          Welcome to Phonebook!
        </h1>

        <div className="flex flex-col items-center justify-center">
          <Link
            className="btn btn-outline btn-info text-lg md:text-xl md:mb-3  lg:text-2xl lg:mb-4 xl:text-3xl xl:mb-6"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="btn btn-outline btn-warning text-lg md:text-xl lg:text-2xl mt-2 md:mt-0 lg:mb-4 xl:text-3xl"
            to="/register"
          >
            Register
          </Link>
        </div>

        <p className="mt-6 mb-36 text-center md:text-lg lg:text-xl font-bold whitespace-normal xl:text-2xl xl:mb-26">
          Easy to search & quick to save!
        </p>
      </div>
    </div>
  );
};

export default Home;
