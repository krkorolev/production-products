import { MainPages } from "pages/MainPages";
import { RouteProps } from "react-router-dom";
import * as React from "react";
import { AboutPages } from "pages/AboutPages";
import { NotFoundPages } from "pages/NotFoundPages/NotFoundPages";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPages />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPages />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPages />,
  },
};

// const route = {
//   main: {
//     path: "/",
//     element: <MainPages />,
//   },
//   about: {
//     path: "/about",
//     element: <AboutPages />,
//   },
// };
