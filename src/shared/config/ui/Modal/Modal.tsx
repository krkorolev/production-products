import * as React from "react";

import { classNames } from "helpers/classNames/classNames";
import { ReactNode } from "react";
import { Portal } from "../Portal/Portal";
import cls from "./Modal.module.scss";
import { useTheme } from "app/providers/ThemeProviders";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  isClose: () => void;
  lazy?: boolean;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { className, children, lazy, isOpen, isClose } = props;
  const { theme } = useTheme();

  const mods: Record<string, boolean> = {
    [cls.oppend]: isOpen,
  };
  const [isClosing, setIsClosing] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>();

  const keyDown = React.useCallback((e: KeyboardEvent) => {
    console.log("keyDown");
    if (e.key === "Escape") {
      closeHandler();
    }
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = React.useCallback(() => {
    if (isClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        isClose();
        setIsClosing(false);
      }, 1);
    }
  }, [isClose]);

  React.useEffect(() => {
    console.log("useEffect");

    if (isOpen) {
      window.addEventListener("keydown", keyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", keyDown);
    };
  }, [isOpen]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  
  if(lazy && !isMounted) {
    return null
  }

  return (
    // <Portal>
    <div className={classNames(cls.Modal, mods, [className, theme])}>
      <div className={cls.overlay} onClick={closeHandler}>
        <div className={cls.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
    //    </Portal>
  );
};
