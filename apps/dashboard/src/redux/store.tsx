import React from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  user: userSlice.reducer,
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
