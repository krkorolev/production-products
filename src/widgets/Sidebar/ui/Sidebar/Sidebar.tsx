import * as React from "react";

// import { classNames } from "helpers/classNames/classNames";
// import cls from "./Sidebar.module.scss";
// import {
//   Button,
//   SizeButton,
//   ThemeButton,
// } from "shared/config/ui/Button/Button";
// import ToggleLanguage from "helpers/ToggleLanguage/ToggleLanguage";
// import { AppLink, AppLinkTheme } from "shared/config/ui/AppLink/AppLink";
// import { RoutePath } from "shared/config/routeConfig/routeConfig";
// import { ThemeSwitch } from "shared/config/ui";

// import AboutIcon from "shared/assets/icon/clarity_list-outline-badged.svg";
// import MainIcon from "shared/assets/icon/Vector.svg";

import { classNames } from "helpers/classNames/classNames";
import cls from "./Sidebar.module.scss";
import {
  Button,
  SizeButton,
  ThemeButton,
} from "shared/config/ui/Button/Button";
import ToggleLanguage from "helpers/ToggleLanguage/ToggleLanguage";
import { ThemeSwitch } from "shared/config/ui";

import { SidebarItemList } from "widgets/Sidebar/model/items";
import SidebarItem from "../SideBarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}

export const Sidebar = React.memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.items}>
        {SidebarItemList.map((item) => {
          return <SidebarItem item={item} collap={collapsed} key={item.path} />;
        })}
      </div>
      <Button
        data-testid="sidebar-toogle"
        className={cls.collapsedBtn}
        onClick={onToggle}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={SizeButton.XL}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitch />
        <ToggleLanguage short={collapsed} />
      </div>
    </div>
  );
});
