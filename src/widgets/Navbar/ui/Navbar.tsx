import { classNames } from "helpers/classNames/classNames";
import cls from "./Navbar.module.scss";
import { Button, Modal } from "shared/config/ui";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import { ThemeButton } from "shared/config/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername/ui/LoginModal/LoginModal";

interface NavparProps {
  className?: string;
}

export const Navbar = ({ className }: NavparProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onSnowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
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
};
