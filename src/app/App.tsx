import * as React from "react";
import { useTheme } from "../app/providers/ThemeProviders/index";
import { classNames } from "../helpers/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui";
import { BugButton } from "./providers/ErrorBoundary/ui/BugButton";
import { Modal } from "shared/config/ui";

const App = () => {
  const { theme } = useTheme();


  return (
    <div className={classNames("app", {}, [theme])}>
      <React.Suspense fallback={""}>
        <Navbar />

        <div className="main-page">
          <Sidebar />
          <AppRouter />
          <BugButton />
        </div>
      </React.Suspense>
    </div>
  );
};

export default App;
