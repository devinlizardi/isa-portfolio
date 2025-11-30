import cs from "./Nav.module.scss";
import { Drawer } from "../Drawer/Drawer";
import { useState } from "react";
import cn from "classnames";

export const Hamburger = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <button
        className={cn(cs.hamburger, { [cs.open]: menu })}
        onClick={() => setMenu(!menu)}
      >
        <span className={cn(cs.hamburgerLine, { [cs.open]: menu })} />
        <span className={cn(cs.hamburgerLine, { [cs.open]: menu })} />
        {!menu && <span className={cn(cs.hamburgerLine)} />}
      </button>
      {menu && <Drawer close={() => setMenu(false)} />}
    </>
  );
};
