import counterSlice from "entities/Counter/model/slice/counterSlice";
import userSlice from "entities/User/model/slice/userSlice";

import { StateSchema } from "./StateSchema";
import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterSlice,
    user: userSlice,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS__DEV__,
    preloadedState: initialState,
  });
}
