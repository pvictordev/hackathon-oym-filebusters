import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type IdentityState = {
  isLoading: boolean;
  identity: null | any;
  error: string;
};

const initialState: IdentityState = {
  isLoading: false,
  identity: null,
  error: "",
};

const identitySlice = createSlice({
  name: "identity",
  initialState: initialState,
  reducers: {},
});

export default identitySlice.reducer;

// export default icecreamSlice.reducer;
// export const { ordered, restocked } = icecreamSlice.actions;
