import { Button } from "shared/config/ui";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const BugButton = () => {
  const [err, setErr] = useState(false);
  const {t} = useTranslation()

  useEffect(() => {
    if (err) {
      throw new Error();
    }
  });

  function getError() {
    setErr(!err);
  }

  return <Button onClick={getError}>{t("ошибка")}</Button>;
};
