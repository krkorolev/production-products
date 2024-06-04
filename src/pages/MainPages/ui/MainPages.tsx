import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";
import { Input } from "shared/config/ui";

const MainPages = () => {
  const { t } = useTranslation("main");
  return (
    <div>
      <h1>{t("Главная страница")}</h1>
      <Counter />
      <Input placeholder="Введите текст >" type="text"/>
    </div>
  );
};

export default MainPages;
