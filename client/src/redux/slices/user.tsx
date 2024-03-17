import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/type";

type InitialState = {
    users:User[]
}

const initialState: InitialState = {
users:[]
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload
        }
    }
});

export const UserAction = userSlice.actions;
export const UserReducer = userSlice.reducer;