import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AppSlice {
  isSideBarExtendedOrShrinked?: boolean;
}

const initialState: AppSlice = {
  isSideBarExtendedOrShrinked: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSideBarExtendedOrShrinked: (state) => {
      state.isSideBarExtendedOrShrinked = !state.isSideBarExtendedOrShrinked;
    },
  },
});

export const { setSideBarExtendedOrShrinked } = appSlice.actions;
export const selectApp = (state: { app: AppSlice }) => state.app;
export default appSlice;
