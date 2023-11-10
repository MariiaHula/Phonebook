import { createSlice } from '@reduxjs/toolkit';
import { loginUserThunk, registerUserThunk } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  token: '',
  isloggedIn: false,
};

export const usersSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.user.password = payload.user.password;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase();
  },
});

export const authUserReducer = usersSlice.reducer;
