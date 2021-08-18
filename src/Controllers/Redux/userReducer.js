import {createSlice} from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: "user",
    initialState: [{}],
    reducers:{
        getUser: (state) => {
            state.push({name:"Dan Harding"})
            state.push({name: "John Doe"})
}
    }
})

export default userReducer.reducer;

// export const {getUser} = userReducer.action