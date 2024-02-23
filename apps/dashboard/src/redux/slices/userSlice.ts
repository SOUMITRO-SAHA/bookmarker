import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserStateType {}

const initialState: UserStateType = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserStateType>) => {},
    clearUser: (state) => {},
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: { user: UserStateType }) => state.user;
export default userSlice;
