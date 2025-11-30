import { NavLink } from "react-router";
import cs from "./Drawer.module.scss";
import { createPortal } from "react-dom";
import { works } from "../../works/works";
import { formatRoute } from "../WorkList/formatRoute";

export const Drawer = ({ close }: { close: () => void }) => {
  return createPortal(
    <nav className={cs.menu}>
      <div className={cs.header}></div>
      <section className={cs.menuListWrapper}>
        <ul className={cs.menuList}>
          <li onClick={close}>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li onClick={close}>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          {works.map((work) => {
            const { title } = work;
            return (
              <li onClick={close}>
                <NavLink to={`/${formatRoute(title)}`} key={title}>
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </section>
    </nav>,
    document.body,
  );
};
