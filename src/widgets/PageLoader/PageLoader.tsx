import { Loader } from "widgets/Loading/Loading";
import cls from "./PageLoader.module.scss";
import { classNames } from "helpers/classNames/classNames";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
