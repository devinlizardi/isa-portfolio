import scs from "../../App.module.scss";
import cs from "./WorkList.module.scss";
import { Link, NavLink } from "react-router";
import { formatRoute } from "./formatRoute";
import { works } from "../../works/works";

export const WorkList = () => {
  return (
    <div className={cs.frame}>
      <div className={cs.content}>
        <h1 className={scs.name}>
          <Link to="/contact">
            Isabella <br /> Guerra Uccelli
          </Link>
        </h1>
        <h2 className={scs.works}>Works</h2>
        <div className={scs.workList}>
          {works.map((work) => {
            const { title, year } = work;
            return (
              <NavLink to={`/${formatRoute(title)}`} key={title}>
                <div className={cs.workItem}>
                  {title}
                  <i>{year}</i>
                </div>
              </NavLink>
            );
          })}
        </div>
        <footer>
          <b>
            <NavLink to="/contact">Contact</NavLink>
          </b>
          <p>© All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};
