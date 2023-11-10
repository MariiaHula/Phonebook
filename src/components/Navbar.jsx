import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Phonebook</NavLink>
      </div>
      <div>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </>
  );
};

export default Navbar;
