import { configureStore } from "@reduxjs/toolkit";
import identityReducer from "@features/identity/identitySlice";
import invoiceReducer from "@features/invoice/invoiceSlice";
import passportReducer from "@features/passport/passportSlice";
import authReducer from "@features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    identity: identityReducer,
    invoice: invoiceReducer,
    passport: passportReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
