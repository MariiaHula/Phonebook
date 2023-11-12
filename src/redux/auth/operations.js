import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from 'axios';

export const axios = instance.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const deleteToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUserThunk = createAsyncThunk(
  'register',
  async (credentials, ThunkApi) => {
    try {
      const { data } = await axios.post('users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'login',
  async (credentials, ThunkApi) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  'logout',
  async (_, ThunkApi) => {
    try {
      const { data } = await axios.post('users/logout');
      deleteToken();
      return data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'refresh',
  async (_, ThunkApi) => {
    try {
      const currentToken = ThunkApi.getState().auth.token;
      if (!currentToken) {
        return ThunkApi.rejectWithValue('No such token exists');
      }
      setToken(currentToken);
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  }
);
