import * as React from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";
import { DeepPartial } from "@reduxjs/toolkit";

interface StoreProviderProps {
  children?: React.ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);
  
  return <Provider store={store}>{children}</Provider>;
};





 