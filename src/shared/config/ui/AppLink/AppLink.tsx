import * as React from "react";

import { classNames } from "helpers/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const { className, children, theme, to, ...otherProps } = props;
  return (
    <Link to={to} {...otherProps} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  );
};
