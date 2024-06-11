import { StoreProvider } from "./ui/StoreProvider";
import { createReduxStore, AppDispatch } from "./config/store";
import type { StateSchema } from "./config/StateSchema";
import { ThunkConfig } from "./config/StateSchema";
export {
  StoreProvider,
  createReduxStore,
  ThunkConfig,
  StateSchema,
  AppDispatch,
};
