import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setDelitedId } from './contactsSlice';

axios.defaults.baseURL = 'https://654a3566e182221f8d52babf.mockapi.io/';

export const fetchDataThunk = createAsyncThunk(
  'fetchAll',
  async (_, ThunkApi) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  }
);
export const addContactThunk = createAsyncThunk(
  'addContact',
  async (body, ThunkApi) => {
    try {
      const { data } = await axios.post('contacts', body);
      return data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContactById',
  async (id, ThunkApi) => {
    try {
      ThunkApi.dispatch(setDelitedId(id));
      const { data } = await axios.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  }
);
export const updateContactThunk = createAsyncThunk(
  'updateContactById',
  async (body, ThunkApi) => {
    try {
      const { data } = await axios.put(`contacts/${body.id}`, { ...body });
      return data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  }
);
