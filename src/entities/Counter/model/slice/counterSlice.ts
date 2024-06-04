import { createSlice } from "@reduxjs/toolkit";
import { CounterSchema } from "../types/counterSchema";

const initialState: CounterSchema = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementReducers: (state) => {
      state.value += 1;
    },
    decrementReducers: (state) => {
      state.value -= 1;
    },
  },
});

export const { incrementReducers, decrementReducers } = counterSlice.actions;

export default counterSlice.reducer;
