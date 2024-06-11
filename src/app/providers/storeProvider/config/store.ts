import counterSlice from "entities/Counter/model/slice/counterSlice";
import userSlice from "entities/User/model/slice/userSlice";
import LoginSlice from "features/AuthByUsername/model/slice/LoginSlice";

import { StateSchema } from "./StateSchema";
import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { createReducerManager } from "./reducerManager";
import { useDispatch } from "react-redux";
import { $api } from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterSlice,
    user: userSlice,
    // login: LoginSlice,
  };
  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS__DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  });
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

// Тут для меня магия
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
export const userAppDispatch = () => useDispatch<AppDispatch>();
