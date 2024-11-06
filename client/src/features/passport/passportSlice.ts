import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type PassportState = {
  isLoading: boolean;
  passport: null | any;
  error: string;
};

const initialState: PassportState = {
  isLoading: false,
  passport: null,
  error: "",
};

const passportSlice = createSlice({
  name: "passport",
  initialState: initialState,
  reducers: {},
});

export default passportSlice.reducer;

// export default icecreamSlice.reducer;
// export const { ordered, restocked } = icecreamSlice.actions;
