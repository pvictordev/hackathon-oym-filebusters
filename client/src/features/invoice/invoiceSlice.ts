import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

type InvoiceState = {
  isLoading: boolean;
  invoice: null | any;
  error: string;
};

const initialState: InvoiceState = {
  isLoading: false,
  invoice: null,
  error: "",
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: initialState,
  reducers: {},
});

export default invoiceSlice.reducer;

// export default icecreamSlice.reducer;
// export const { ordered, restocked } = icecreamSlice.actions;
