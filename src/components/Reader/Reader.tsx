import { Outlet } from "react-router";
import { Hamburger } from "../Nav/Hamburger";
import cs from "./Reader.module.scss";
import { useSurface } from "../../hooks/useSurface";
import { DesktopHeader } from "../DesktopHeader/DesktopHeader";

export const Reader = ({ title }: { title: string }) => {
  const surface = useSurface()
  const isMobile = surface === 'mobile'

  return (
    <div className={cs.readerWrapper}>
      {isMobile && <Hamburger />}
      {!isMobile && <DesktopHeader />}
      <h1 className={cs.readerTitle}>{title}</h1>
      <Outlet />
    </div>
  );
};
