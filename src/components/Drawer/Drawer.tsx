import { NavLink } from "react-router";
import cs from "./Drawer.module.scss";
import { createPortal } from "react-dom";
import { works } from "../../works/works";

export const Drawer = ({ close }: { close: () => void }) => {
  return createPortal(
    <nav className={cs.menu}>
      <div className={cs.header}>
        <button className={cs.closeX} onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <line
              x1="1.12129"
              y1="0.707078"
              x2="14.5563"
              y2="14.1421"
              stroke="var(--cream)"
              strokeWidth="2"
            />
            <line
              x1="0.707078"
              y1="14.1423"
              x2="14.1421"
              y2="0.70723"
              stroke="var(--cream)"
              strokeWidth="2"
            />
          </svg>
        </button>
        <NavLink to="/">
          Isa
          <span className={cs.block} />
        </NavLink>
      </div>
      <section className={cs.menuListWrapper}>
        <ul className={cs.menuList}>
          <li>Contact</li>
          {works.map((work) => (
            <li>{work.title}</li>
          ))}
        </ul>
      </section>
    </nav>,
    document.body,
  );
};
