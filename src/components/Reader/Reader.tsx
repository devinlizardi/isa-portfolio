import { Outlet } from "react-router";
import { Hamburger } from "../Nav/Hamburger";
import cs from "./Reader.module.scss";

export const Reader = ({ title }: { title: string }) => {
  return (
    <>
      <Hamburger />
      <h1 className={cs.readerTitle}>{title}</h1>
      <Outlet />
    </>
  );
};
