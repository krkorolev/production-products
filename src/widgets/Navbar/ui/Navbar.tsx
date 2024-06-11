import { classNames } from "helpers/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Button, Modal } from "shared/config/ui";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { ThemeButton } from "shared/config/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername/ui/LoginModal/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { logout } from "entities/User/model/slice/userSlice";

interface NavparProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavparProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onSnowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(logout());
  }, []);
  if (authData) {
    return (
      <div className={classNames(cls.navbar)}>
        <Button
          theme={ThemeButton.OUTLINE}
          className={cls.links}
          onClick={onLogout}
        >
          {t("Выйти")}
        </Button>
      </div>
    );
  }
  return (
    <div className={classNames(cls.navbar)}>
      <Button
        theme={ThemeButton.OUTLINE}
        className={cls.links}
        onClick={onSnowModal}
      >
        {t("Войти")}
      </Button>
      <LoginModal isOpen={isAuthModal} isClose={onCloseModal} />
    </div>
  );
});
