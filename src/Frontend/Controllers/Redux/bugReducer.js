import {createSlice} from "@reduxjs/toolkit";
import {retrieveBugs} from '../bugController';

const bugReducer = createSlice({
    name: "bug",
    initialState: [],
    reducers: {
        getBugs: state => retrieveBugs(),
        createBugs: (state, action) => {

        },
        updateBug:(state, action) => {

        },
        markComplete:(state, action) => {

        }
    }
})

export default bugReducer.reducer;

export const {getBugs, createBugs, updateBug, markComplete} = bugReducer.actions