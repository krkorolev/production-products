import * as React from "react";

import { classNames } from "helpers/classNames/classNames";
import cls from "./NotFound.module.scss";
import { useTranslation } from "react-i18next";

interface NotFoundPagesProps {
  className?: string;
}

export const NotFoundPages = ({ className }: NotFoundPagesProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.PageLoader)}>{t("Страница не найдена")}</div>
  );
};
