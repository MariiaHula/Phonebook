import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/auth/operations';
import { selectUsers } from 'redux/auth/selectors';

const UserMenu = () => {
  const { email } = useSelector(selectUsers);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{email}</p>
      <button
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
