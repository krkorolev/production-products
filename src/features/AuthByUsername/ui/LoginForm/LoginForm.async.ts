import * as React from "react";
import { LoginFormProps } from "./LoginForm";
import { lazy, FC } from "react";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () => import("./LoginForm")
);
