import * as React from "react";
import { useTranslation } from "react-i18next";

const AboutPages = () => {
  const {t} = useTranslation('about')
  return <h1>{t("О нашем сайте")}</h1>;
};

export default AboutPages;
