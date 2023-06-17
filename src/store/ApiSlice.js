import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl =
  "http://api.weatherapi.com/v1/current.json?key=1401974eacfe4b6095082922231706";

const initialState = {
  data: [],
  status: "idle",
  error: "",
};

export const fetchApi = createAsyncThunk(
  "api/fetchApi",
  async (q = "mumbai") => {
    try {
      const response = await axios.get(`${apiUrl}&q=${q}&aqi=yes`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const apiSlice = createSlice({
  name: "apiSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchApi.pending, (state, action) => {
        state.status = "PENDING";
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.status = "FULFILLED";
        state.data = action.payload;
        console.log(state.data);
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.status = "REJECTED";
      });
  },
});

export const {} = apiSlice.actions;
export default apiSlice.reducer;
