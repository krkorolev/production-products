import { classNames } from "helpers/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { Button, Input, Text } from "shared/config/ui";
import { ThemeButton } from "shared/config/ui/Button/Button";

interface ProfileCardProps {
  className?: string;
}
export const ProfileCard = ({ className }: ProfileCardProps) => {
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={"Профиль пользователя"} />
        <Button className={cls.editBtn} theme={ThemeButton.OUTLINE}>
          Редактировать
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          className={cls.input}
          value={data?.first}
          placeholder="Ваше имя"
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder="Ваша фамилия"
        />
      </div>
    </div>
  );
};
