// import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";
import * as React from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGTH;

const ThemeProvider: React.FC = ({children}) => {
  const [themes, setThemes] = React.useState<Theme>(defaultTheme);


  const defaultProps = React.useMemo(
    () => ({
      theme: themes,
      setThemes: setThemes,
    }),
    [themes]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
        {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
