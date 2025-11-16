import { Link } from "react-router";
import cs from "./Nav.module.scss";

export const Hamburger = () => {
  return (
    <Link to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="14"
        viewBox="0 0 19 14"
        fill="none"
      >
        <line
          className={cs.hamburgerLine}
          y1="1"
          x2="19"
          y2="1"
          strokeWidth="2"
        />
        <line
          y1="13"
          x2="19"
          y2="13"
          strokeWidth="2"
          className={cs.hamburgerLine}
        />
        <line
          y1="7"
          x2="19"
          y2="7"
          strokeWidth="2"
          className={cs.hamburgerLine}
        />
      </svg>
    </Link>
  );
};
