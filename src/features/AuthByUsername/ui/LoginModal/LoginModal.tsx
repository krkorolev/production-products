import * as React from "react";
import cls from "./LoginModal.module.scss";
import { Modal } from "shared/config/ui";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  isClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const { className, children, isClose, isOpen, ...otherProps } = props;
  return <Modal isOpen={isOpen} isClose={isClose} lazy>
    <LoginForm/>
  </Modal>;
};
