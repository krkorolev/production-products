import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { Loading } from "widgets/Loading/Loading";

const AppRouter = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </React.Suspense>
  );
};

export default AppRouter;
