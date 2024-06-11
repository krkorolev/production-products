import { DeepPartial } from "@reduxjs/toolkit";

import { LoginSchema } from "../types/LoginSchema";
import LoginSlice, { setPassword, setUsername } from "./LoginSlice";

describe("loginSlice", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginSchema> = { username: "123" };

    expect(LoginSlice(state as LoginSchema, setUsername("123123"))).toEqual({
      username: "123123",
    });
  });
  test("test set password", () => {
    const state: DeepPartial<LoginSchema> = { password: "123" };

    expect(LoginSlice(state as LoginSchema, setPassword("123123"))).toEqual({
      password: "123123",
    });
  });
});
