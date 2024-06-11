import counterSlice from "entities/Counter/model/slice/counterSlice";
import userSlice from "entities/User/model/slice/userSlice";
import LoginSlice from "features/AuthByUsername/model/slice/LoginSlice";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { CombinedState, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { createReducerManager } from "./reducerManager";
import { useDispatch } from "react-redux";
import { $api } from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";
import { Reducer } from "react";

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
  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    //@ts-ignore
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS__DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
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
