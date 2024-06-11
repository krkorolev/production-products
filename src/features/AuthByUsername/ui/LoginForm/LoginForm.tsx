import * as React from "react";

import { classNames } from "helpers/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { Button, Input, Text } from "shared/config/ui";
import { useDispatch, useSelector, useStore } from "react-redux";
import { getLogin } from "features/AuthByUsername/model/selectors/getLogin/getLogin";
import {
  ReduxStoreWithManager,
  loginByUserName,
  setPassword,
  setUsername,
} from "features/AuthByUsername";
import { TextTheme } from "shared/config/ui/Text/Text";
import LoginSlice from "features/AuthByUsername/model/slice/LoginSlice";
import { getLoginError } from "features/AuthByUsername/model/selectors/getLoginError/getLoginError";
import { getLoginIsUsername } from "features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/test/renderWithTranslation/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}
const initialReducers: ReducersList = {
  login: LoginSlice,
};

const LoginForm: React.FC<LoginFormProps> = React.memo((props) => {
  const { className, children, onSuccess } = props;
  const error = useSelector(getLoginError);
  const username = useSelector(getLoginIsUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);

  const dispatch = useAppDispatch();

  const onChangeUsername = React.useCallback(
    (value: string) => {
      dispatch(setUsername(value));
    },
    [dispatch]
  );
  const onChangePassword = React.useCallback(
    (value: string) => {
      dispatch(setPassword(value));
    },
    [dispatch]
  );
  const onLoginClick = React.useCallback(async () => {
    const result = await dispatch(loginByUserName({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess()
    };
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title="Форма авотризации" theme={TextTheme.PRIMARY} />
        {error && <Text title={error} theme={TextTheme.ERROR} />}
        <Input
          type="text"
          placeholder="Введите username>"
          autofocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          placeholder="Введите пароль>"
          onChange={onChangePassword}
          value={password}
        />
        <Button disabled={isLoading} onClick={onLoginClick}>
          Вход
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
