import * as React from "react";

import { classNames } from "helpers/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { Button, Input } from "shared/config/ui";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input type="text" placeholder="Введите username>" autofocus />
      <Input type="text" placeholder="Введите пароль>" />
      <Button>Вход</Button>
    </div>
  );
};
