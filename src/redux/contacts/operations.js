import { createAsyncThunk } from '@reduxjs/toolkit';
import { setDelitedId } from './contactsSlice';
import { axios } from 'redux/auth/operations';

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
  async ({ id, ...body }, ThunkApi) => {
    try {
      const { data } = await axios.patch(`contacts/${id}`, body);
      return data;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  }
);
