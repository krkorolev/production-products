import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/storeProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginpaswword", () => {
  test("return pass", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: "123",
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual("123");
  });
  test("return false", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});
