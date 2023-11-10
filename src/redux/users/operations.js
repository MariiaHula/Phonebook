import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'axios';

const axios = instance.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const registerUserThunk = createAsyncThunk(
  'register',
  async (body, ThunkApi) => {
    try {
      const { data } = await axios.post('users/signup', body);
      return data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'login',
  async (body, ThunkApi) => {
    try {
      const { data } = await axios.post('users/login', body);
      return data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  }
);
