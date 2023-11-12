import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/auth/operations';
import { selectUsers } from 'redux/auth/selectors';

const UserMenu = () => {
  const { email } = useSelector(selectUsers);
  const dispatch = useDispatch();
  return (
    <div className=" flex-wrap items-end space-x-16">
      <p className="ml-1 text-amber-500">{email} </p>
      <button
        className="btn btn-active btn-link text-blue-400 text-[18px] hover:text-blue-600 underline"
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
