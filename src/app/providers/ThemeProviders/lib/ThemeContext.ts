import { createContext } from "react";

export enum Theme {
  LIGTH = "app_light_theme",
  DARK = "app_dark_theme",
}

export interface ThemeContextProps {
  theme?: Theme;
  setThemes?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
