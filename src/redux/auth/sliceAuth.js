import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginUserThunk,
  logoutUserThunk,
  refreshUserThunk,
  registerUserThunk,
} from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isRefresh: false,
};

export const usersSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutUserThunk.fulfilled, (state, { payload }) => {
        return (state = { ...initialState, isRefresh: false });
      })
      .addCase(refreshUserThunk.pending, state => {
        state.isRefresh = true;
      })
      .addCase(refreshUserThunk.rejected, state => {
        state.isRefresh = false;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addMatcher(
        isAnyOf(registerUserThunk.fulfilled, loginUserThunk.fulfilled),
        (state, { payload }) => {
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      );
  },
});

export const authUserReducer = usersSlice.reducer;
