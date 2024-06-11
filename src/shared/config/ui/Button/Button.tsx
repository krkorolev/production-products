import * as React from "react";
import { classNames } from "../../../../helpers/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
  CLEAR = " clear",
  BACKGROUND = "background",
  OUTLINE = "outline",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum SizeButton {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    square,
    size = SizeButton.XL,
    disabled,
    theme,
    ...otherProps
  } = props;
  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };
  return (
    <button
      disabled={disabled}
      className={classNames(cls.Button, mods, [className])}
      // className={classNames(cls.button, {[cls[theme]: true}, className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
