import {createSlice} from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "auth",
    initialState: {
        admin: false,
        loggedIn: false,
    },
    reducers: {
        signIn: (state, action) => {
            const {name, password} = action.payload;
            state.loggedIn = true;
            state.admin = true;
        },
        signOut: (state) => {
            state.loggedIn = false;
            state.admin = false;
        },
        createUser:(state, action) => {

        }
    }
})

export default authReducer.reducer;

export const {signIn, signOut, createUser} = authReducer.actions;