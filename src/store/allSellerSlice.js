import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const baseURL = 'https://africommerce.cyclic.app/';
const initialState = {
  loading: false,
  sellers: null,
  error: null,
};

export const getAllSellers = createAsyncThunk('get all sellers', async () => {
  try {
    const result = await axios.get(baseURL + 'business/');
    console.log(result);
    if (result.data) return result.data.data;
  } catch (error) {
    console.log(error);
  }
});
const allSellerSlice = createSlice({
  name: 'all sellers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSellers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllSellers.fulfilled, (state, action) => {
        console.log(state, action);
        state.sellers = action.payload;
        state.loading = false;
      })
      .addCase(getAllSellers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default allSellerSlice.reducer;
