import { combineReducers, configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import appSlice from "./slices/appSlice.ts";
import userSlice from "./slices/userSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  app: appSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
