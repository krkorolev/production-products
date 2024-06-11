import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/storeProvider";
import { getLoginIsUsername } from "./getLoginUsername";

describe("getLoginpaswword", () => {
  test("return pass", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: "123",
      },
    };
    expect(getLoginIsUsername(state as StateSchema)).toEqual("123");
  });
  test("return false", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsUsername(state as StateSchema)).toEqual("");
  });
});
