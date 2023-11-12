import React from 'react';
import { Link } from 'react-router-dom';
import img_1 from '../images/img_1.jpg';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${img_1})`,
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Hello there
        </h1>
        <p className="text-sm md:text-base lg:text-lg mb-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>

        <Link
          className="btn btn-accent mr-2 md:mr-4 md:text-lg lg:text-xl"
          to="/login"
        >
          Login
        </Link>

        <Link className="btn btn-accent md:text-lg lg:text-xl" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
