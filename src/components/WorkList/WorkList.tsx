import scs from "../../App.module.scss";
import cs from "./WorkList.module.scss";
import { Link, NavLink } from "react-router";
import { formatRoute } from "./formatRoute";
import { works } from "../../works/works";
import { useSurface } from "../../hooks/useSurface";
import { getBrowserLanguage } from "../../helpers/getBrowserLanguage";

export const WorkList = () => {
  const surface = useSurface();
  const isDesktop = surface === "desktop";
  const language = getBrowserLanguage();
  const espanol = language.includes("es");

  return (
    <div className={cs.frame}>
      <div className={cs.content}>
        <h1 className={scs.name}>
          <Link to="/contact">
            Isabella <br /> Guerra {isDesktop && <br />} Uccelli
          </Link>
        </h1>
        <div>
          {!espanol && <h2 className={scs.works}>Works</h2>}
          {espanol && <h2 className={scs.works}>Obras</h2>}
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
