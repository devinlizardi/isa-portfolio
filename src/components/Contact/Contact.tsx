import { useSurface } from "../../hooks/useSurface";
import { DesktopHeader } from "../DesktopHeader/DesktopHeader";
import { Hamburger } from "../Nav/Hamburger";
import cs from "./Contact.module.scss";

export const Contact = () => {
  const surface = useSurface();
  const isDesktop = surface === "desktop";

  return (
    <div className={cs.frame}>
      <div className={cs.contactPage}>
        {!isDesktop && <Hamburger />}
        {isDesktop && <DesktopHeader />}
        <p>
          <b>Isabella Guerra Uccelli </b>is a bilingual, Spanish and English
          language writer and researcher. Her creative writing varies in style
          and her works are inspired from personal experience. In some of her
          writing, she chooses to intercalate both of her native languages
          {isDesktop && (
            <span>, transitioning from one language to another</span>
          )}
          . Born in Boston, Massachusetts, she is the daughter of Peruvian and
          Puerto Rican parents.
        </p>
        <img rel="preload" src="/isabella.jpg" />
        <br />
        <p>
          Reach her at {" "}
          <a className={cs.email} href="mailto:iguerrauccelli@gmail.com">
            iguerrauccelli@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};
