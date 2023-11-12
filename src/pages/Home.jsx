import React from 'react';
import { Link } from 'react-router-dom';
import img_2 from '../images/img_2.jpg';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center flex-wrap"
      style={{ backgroundImage: `url(${img_2})` }}
    >
      <div className="text-center px-4 flex-col rotate-1 mt-80">
        <h1 className="text-4xl w-60 md:text-6xl lg:text-7xl font-bold mb-10">
          Welcome to Phonebook!
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <Link className="btn btn-info text-xl" to="/login">
            Login
          </Link>
          <Link className="btn btn-warning text-xl mt-2 md:mt-0" to="/register">
            Register
          </Link>
        </div>
      </div>
      <div className="mb-40 rotate-1 ">
        <p className="text-l md:text-base lg:text-lg font-bold whitespace-normal">
          Easy to search & quick to save!
        </p>
      </div>
    </div>
  );
};

export default Home;
