import { classNames } from "helpers/classNames/classNames";
import * as React from "react";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/config/ui/AppLink/AppLink";
import { ThemeSwitch } from "shared/config/ui";

interface NavparProps {
  className?: string;
}

export const Navbar = ({ className }: NavparProps) => {
  return (
    <div className={classNames(cls.navbar)}>
      <ThemeSwitch/>
      <AppLink to={"/"} theme={AppLinkTheme.PRIMARY}>
        Главная
      </AppLink>
      <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
        О нас
      </AppLink>
    </div>
  );
};
