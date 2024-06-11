import { Reducer } from "@reduxjs/toolkit";
import { StateSchemaKey } from "app/providers/storeProvider/config/StateSchema";
import { ReduxStoreWithManager } from "features/AuthByUsername";
import React, { FC,  useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};


interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  // children?: ReactElement<any, any>
}
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount,
}) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      console.log(name, "name");
      console.log(reducer, "reducer");

      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(
          ([name, reducer]) => {
            store.reducerManager.remove(name as StateSchemaKey);
            dispatch({ type: `@DESTROY ${name} reducer` });
          }
        );
      }
    };
  }, []);

  return <>{children}</>;
};

// interface DynamicModuleLoaderProps {
//   name: StateSchemaKey;
//   reducer: Reducer;
// }

// export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
//   const { name, reducer, children } = props;
//   const store = useStore() as ReduxStoreWithManager;

//   React.useEffect(() => {
//     store.reducerManager.add(name, reducer);

//     return () => {
//       store.reducerManager.remove(name);
//     };
//   }, []);

//   return (
//     <>
//     {
//         children,
//       }
//     </>);
// };
