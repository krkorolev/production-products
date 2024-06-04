import * as React from "react";
import { useTranslation } from "react-i18next";

interface ToggleLanguageProps {
  className?: string;
  short?: boolean;
}

function ToggleLanguage({ className, short }: ToggleLanguageProps) {
  const [t, i18n] = useTranslation();

  const toogle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  // React.useEffect(() => {
  //   if (Math.random() < 0.5) {
  //     throw new Error();
  //   }
  // });
  return (
    <div>
      <button onClick={toogle}>{t(short ? "Короткий язык" : "Перевод")}</button>
    </div>
  );
}

export default ToggleLanguage;
