import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserMenu from './UserMenu';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPhoneVibrate } from 'react-icons/bs';

const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div className="bg-white p-3 flex justify-between items-center h-[96px]">
        <div className="flex">
          {!isLoggedIn ? (
            <NavLink
              to="/"
              className="text-black text-[24px] font-bold hover:text-yellow-300 mr-20"
            >
              <AiOutlineHome size={36} />
            </NavLink>
          ) : (
            <NavLink
              to="/contacts"
              className="text-black text-[24px] font-bold hover:text-yellow-300 mr-10"
            >
              <BsPhoneVibrate
                size={36}
                style={{
                  color: '#fda403',
                  marginLeft: '8px',
                }}
              />
            </NavLink>
          )}
        </div>

        {!isLoggedIn ? (
          <div className="flex">
            <NavLink
              to="/login"
              className="btn btn-active btn-link text-blue-400 text-[18px]  hover:text-blue-600 underline"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-active btn-link text-blue-400 text-[18px]  hover:text-blue-600 underline"
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
