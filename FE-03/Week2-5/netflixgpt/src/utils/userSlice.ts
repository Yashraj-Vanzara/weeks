import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
};

export const userSlice = createSlice({
  name: "user",
  initialState: null as User | null,
  reducers: {
    addUser: (_state, action: PayloadAction<User>) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
