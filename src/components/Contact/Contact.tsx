import { getBrowserLanguage } from "../../helpers/getBrowserLanguage";
import { useSurface } from "../../hooks/useSurface";
import { DesktopHeader } from "../DesktopHeader/DesktopHeader";
import { Hamburger } from "../Nav/Hamburger";
import cs from "./Contact.module.scss";

export const Contact = () => {
  const surface = useSurface();
  const isDesktop = surface === "desktop";
  const language = getBrowserLanguage();
  const espanol = language.includes("es");

  return (
    <div className={cs.frame}>
      <div className={cs.contactPage}>
        {!isDesktop && <Hamburger />}
        {isDesktop && <DesktopHeader />}
        {!espanol && (
          <p>
            <b>Isabella Guerra Uccelli </b>is a bilingual Spanish and English
            language writer and researcher. Her creative writing varies in style
            and her works are inspired from personal experience. In some of her
            writing, she chooses to intercalate both of her native languages
            {isDesktop && (
              <span>, transitioning from one language to another</span>
            )}
            . Born in Boston, Massachusetts, she is the daughter of Peruvian and
            Puerto Rican parents.
          </p>
        )}
        {espanol && (
          <p>
            <b>Isabella Guerra Uccelli </b>es una escritora e investigadora
            bilingüe en inglés y español. Su escritura creativa varía en estilo
            y se inspira en su vida personal. En algunos trabajos, ella escoja
            intercalar sus dos lenguas maternas
            {isDesktop && <span>, cambiando de una a la otra</span>}. Nacida en
            Boston, Massachusetts, ella es hija de mamá peruana y papá
            puertorriqueño.
          </p>
        )}
        <img rel="preload" src="/isabella.jpg" />
        <br />
        {!espanol && (
          <p>
            Reach her at{" "}
            <a className={cs.email} href="mailto:iguerrauccelli@gmail.com">
              iguerrauccelli@gmail.com
            </a>
          </p>
        )}
        {espanol && (
          <p>
            Contáctala por email:{" "}
            <a className={cs.email} href="mailto:iguerrauccelli@gmail.com">
              iguerrauccelli@gmail.com
            </a>
          </p>
        )}
      </div>
    </div>
  );
};
