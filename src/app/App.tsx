import * as React from "react";
import "./style/index.scss";
import { useTheme } from "../app/providers/ThemeProviders/index";
import { classNames } from "../helpers/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui";
import { useTranslation } from "react-i18next";
import { BugButton } from "./providers/ErrorBoundary/ui/BugButton";

function ToggleLanguage() {
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
      <h3>{t("Текст для перевода")}</h3>
      <button onClick={toogle}>{t("Перевод")}</button>
    </div>
  );
}

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <React.Suspense fallback={""}>
        <ToggleLanguage />
        <Navbar />
        <div className="main-page">
          <Sidebar />
          <AppRouter />
          <BugButton/>
        </div>
      </React.Suspense>
    </div>
  );
};

export default App;
