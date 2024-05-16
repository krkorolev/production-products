import * as React from "react";
import "./style/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { MainPagesAsync } from "./pages/AboutPages/AboutPages.async";
import { AboutPagesAsync } from "./pages/MainPages/MainPages.async";
import { useTheme } from "./theme/useThem";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toogleThemes } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toogleThemes}>TOOGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPagesAsync />} />
          <Route path="/about" element={<AboutPagesAsync />} />
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default App;
