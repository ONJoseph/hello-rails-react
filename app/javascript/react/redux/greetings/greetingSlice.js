import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk('greetings/fetch', async () => {
  const response = await fetch('/api/greetings');
  const data = await response.json();
  const { greeting } = data;
  return greeting;
});

const initialState = { loading: false, greeting: '', error: '' };

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchGreetings.fulfilled, (state, action) => {
      return { ...state, greeting: action.payload, loading: false };
    });
    builder.addCase(fetchGreetings.rejected, (state, action) => {
      return { ...state, greeting: '', error: action.error.message };
    });
  },
});

export default greetingSlice;