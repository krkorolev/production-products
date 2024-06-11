import * as React from "react";
import { Modal } from "shared/config/ui";
import { Loader } from "widgets/Loading/Loading";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  isClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const { className, children, isClose, isOpen, ...otherProps } = props;
  return (
    <Modal isOpen={isOpen} isClose={isClose} lazy>
      <React.Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={isClose} />
      </React.Suspense>
    </Modal>
  );
};
