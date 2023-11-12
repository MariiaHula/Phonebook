import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserMenu from './UserMenu';

const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div className="bg-yellow-100  p-6 flex justify-between items-center drop-shadow-lg ">
        <div className="flex space-x-4">
          {!isLoggedIn ? (
            <NavLink
              to="/"
              className="text-black text-[20px] hover:text-yellow-600"
            >
              Home
            </NavLink>
          ) : (
            <NavLink
              to="/contacts"
              className="text-black text-[20px] hover:text-yellow-600"
            >
              Phonebook
            </NavLink>
          )}
        </div>

        {!isLoggedIn ? (
          <div className="flex space-x-4">
            <NavLink
              to="/login"
              className="text-blue-400 text-[18px]  hover:text-blue-600 underline"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="text-blue-400 text-[18px]  hover:text-blue-600 underline"
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
