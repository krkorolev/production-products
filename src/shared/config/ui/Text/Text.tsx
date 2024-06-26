import * as React from "react";

import { classNames } from "helpers/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: React.FC<TextProps> = (props) => {
  const { className, children, title, text, theme = TextTheme.PRIMARY } = props;
  return (
    <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
      {title && <p className={cls.title}>{title} </p>}
      {title && <p className={cls.text}>{text}</p>}
    </div>
  );
};
