import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserMenu from './UserMenu';

const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Phonebook</NavLink>
      </div>

      {!isLoggedIn ? (
        <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      ) : (
        <UserMenu />
      )}
    </>
  );
};

export default Navbar;
