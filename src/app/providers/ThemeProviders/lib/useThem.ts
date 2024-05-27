// import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "app/providers/ThemeProviders/lib/ThemeContext";
import * as React from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemResult {
  toogleThemes: () => void;
  theme: Theme;
}

export function useTheme(): UseThemResult {
  const { theme, setThemes } = React.useContext(ThemeContext);

  const toogleThemes = () => {
    const newThere = theme === Theme.LIGTH ? Theme.DARK : Theme.LIGTH;
    setThemes(newThere);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newThere);
  };

  return { theme, toogleThemes };
}
