import * as React from "react";

import { classNames } from "../../../../helpers/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { Button } from "../../../../shared/config/ui/Button/Button";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
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
      <Button data-testid="sidebar-toogle" onClick={onToggle}>
        toggle
      </Button>
    </div>
  );
};
