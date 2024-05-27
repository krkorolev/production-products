import * as React from "react";

import { classNames } from "helpers/classNames/classNames";
import cls from "./PageError.module.scss";
import { Button } from "shared/config/ui";
import { useTranslation } from "react-i18next";

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const {t} = useTranslation()
  function onReloadPage() {
    location.reload();
  }
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h1>{t("Произошла непредвиденная ошибка")}</h1>
      <Button className={'reload'} onClick={onReloadPage}>Обновить страницу!</Button>
    </div>
  );
};
