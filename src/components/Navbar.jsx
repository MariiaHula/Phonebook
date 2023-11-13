import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserMenu from './UserMenu';
import { PhoneIcon, HomeIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div className="bg-white p-3 flex justify-between items-center md:px-10 max-w-screen-xl mx-auto">
        <div className="flex items-center">
          {!isLoggedIn ? (
            <NavLink
              to="/"
              className="text-black text-2xl font-bold hover:text-yellow-300 mr-8 md:mr-10 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <HomeIcon className="h-8 w-8 md:h-10 md:w-10 hover:text-sky-600 underline transition-all duration-300 ease-in-out cursor-pointer" />
            </NavLink>
          ) : (
            <NavLink
              to="/contacts"
              className="text-black text-2xl font-bold mr-8 md:mr-10"
            >
              <PhoneIcon className="h-8 w-8 md:h-10 md:w-10 text-yellow-500" />
            </NavLink>
          )}
        </div>
        {!isLoggedIn ? (
          <div className="flex">
            <NavLink
              to="/login"
              className="btn btn-active btn-link text-sky-400 text-lg hover:text-sky-600 underline transition-all duration-300 ease-in-out cursor-pointer mr-4"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-active btn-link text-sky-400 text-lg hover:text-sky-600 underline transition-all duration-300 ease-in-out cursor-pointer"
            >
              Register
            </NavLink>
          </div>
        ) : (
          <UserMenu />
        )}
      </div>
    </>
  );
};

export default Navbar;
