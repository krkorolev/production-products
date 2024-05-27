import * as React from "react";
import { useTranslation } from "react-i18next";

const MainPages = () => {
  const { t } = useTranslation('main');
  return <h1>{t("Главная страница")}</h1>;
};

export default MainPages;
