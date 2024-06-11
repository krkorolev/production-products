import { StateSchema } from "app/providers/storeProvider";
import { getLoginError } from "./getLoginError";

describe("getLoginError", () => {
  test("return error", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        error: "error",
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual("error");
  });
  test("return undef", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
