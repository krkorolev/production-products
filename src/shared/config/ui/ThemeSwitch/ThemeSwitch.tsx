import * as React from "react";

import { useTheme } from "app/providers/ThemeProviders";
import { Button, ThemeButton } from "../Button/Button";
import { Theme } from "app/providers/ThemeProviders/lib/ThemeContext";

import LigthIcon from "../../../assets/icon/theme-light.svg";
import DarkIcon from "../../../assets/icon/theme-dark.svg";

interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = () => {
  const { toogleThemes, theme } = useTheme();

  return (
    <Button theme={ThemeButton.CLEAR} onClick={toogleThemes}>
      {/* <button onClick={toogleThemes}>TOOGLE</button> */}
      {theme === Theme.LIGTH ? <LigthIcon /> : <DarkIcon />}
    </Button>
  );
};
