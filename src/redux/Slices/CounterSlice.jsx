import { createSlice } from "@reduxjs/toolkit";
// setting initial value of slice
const initialState = {
    value : 0,
}

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers : {
        increment : (state) => {
            state.value += 1;
        },  
        decrement : (state) => {
            state.value -= 1;
        }
    }
})

// to export functions from slices use CounterSlice.actions
export const {increment, decrement} = CounterSlice.actions;

export default CounterSlice.reducer;