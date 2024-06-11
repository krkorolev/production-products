import { MainPages } from "pages/MainPages";
import { RouteProps } from "react-router-dom";
import { AboutPages } from "pages/AboutPages";
import { NotFoundPages } from "pages/NotFoundPages/NotFoundPages";
import { ProfilePage } from "pages/ProfilePage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = 'profile',
  NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",

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
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  }, 
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPages />,
  },
};

