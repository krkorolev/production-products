import { classNames } from "helpers/classNames/classNames";
import "./Loading.scss";

interface LoadingProps {
  className?: string;
}

export const Loading = ({ className }: LoadingProps) => {
  return <div className={classNames("loader")}></div>;
};
