import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/auth/operations';
import { selectUsers } from 'redux/auth/selectors';

const UserMenu = () => {
  const { email } = useSelector(selectUsers);
  const dispatch = useDispatch();
  return (
    <div className=" flex-wrap items-end space-x-16 md:flex md:items-center md:justify-center md:space-x-0 ">
      <p className="ml-1 text-amber-500 md:text-2xl">{email} </p>
      <button
        className="btn btn-active btn-link text-sky-400 text-[18px] hover:text-sky-600 underline transition-all duration-300 ease-in-out cursor-pointer md:text-[22px]"
        onClick={() => {
          dispatch(logoutUserThunk());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
