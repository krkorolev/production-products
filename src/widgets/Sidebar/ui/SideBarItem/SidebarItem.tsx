import { AppLink, AppLinkTheme } from "shared/config/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/items";
import cls from "./SidebarItem.module.scss";
import { classNames } from "helpers/classNames/classNames";

interface SidebarItemProps {
  item: SidebarItemType;
  collap: boolean;
}

const SidebarItem = ({ item, collap }: SidebarItemProps) => {
  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: collap })}
      to={item.path}
      theme={AppLinkTheme.PRIMARY}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{item.text}</span>
    </AppLink>
  );
};

export default SidebarItem;
