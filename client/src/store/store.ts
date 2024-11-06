import { configureStore } from "@reduxjs/toolkit";
// ...
// import reduxLogger from 'redux-logger';
// redux-logger
// const logger = reduxLogger.createLogger();
// import authReducer from "@features/_auth/authSlice";
import identityReducer from "@features/identity/identitySlice";
import invoiceReducer from "@features/invoice/invoiceSlice";
import passportReducer from "@features/passport/passportSlice";
// import settingsReducer from "@features/passport/settingsSlice";
const store = configureStore({
  reducer: {
    // settings: settingsReducer,
    // auth: authReducer,
    identity: identityReducer,
    invoice: invoiceReducer,
    passport: passportReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
