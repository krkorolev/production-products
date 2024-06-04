import { StateSchema } from "app/providers/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import counterSlice, { decrementReducers, incrementReducers } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counter slice", () => {
  test("incrementReducers", () => {
    const state: CounterSchema = { value: 10 };

    expect(counterSlice(state, incrementReducers)).toEqual({ value: 11 });
  });
  test("incrementReducers", () => {
    const state: CounterSchema = { value: 10 };

    expect(counterSlice(state, decrementReducers)).toEqual({ value: 9 });
  });
});
