import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/storeProvider";
import { getLoginIsLoading } from "./getLoginIsLoading";

describe("getLoginIsLoading", () => {
  test("return true", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
        password: "",
        username: "",
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });
  test("return false", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
