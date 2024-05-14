import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/type";

type InitialState = {
  users: User[];
  userLoginData: User[];
  userInformation: User | null;
};

const initialState: InitialState = {
  users: [],
  userLoginData: [],
  userInformation: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    getUserLoginData: (state, action: PayloadAction<User[]>) => {
      state.userLoginData = action.payload;
    },
    setUserData: (state, action: PayloadAction<User>) => {
      state.userInformation = action.payload;
     
    },
  },
});

export const userActions = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;