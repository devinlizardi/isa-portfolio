import { Hamburger } from "../Nav/Hamburger";
import cs from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className={cs.frame}>
      <div className={cs.contactPage}>
        <Hamburger />
        <p>
          <b>Isabella Guerra Uccelli </b>is a bilingual, Spanish and English
          language writer and researcher. Her creative writing varies in style
          and her works are inspired from personal experience. In some of her
          writing, she chooses to intercalate both of her native languages,
          transitioning from one language to another. Born in Boston,
          Massachusetts, she is the daughter of Peruvian and Puerto Rican
          parents.
        </p>
        <img rel="preload" src="/isabella.jpg" />
        <br />
        <p>
          Reach her via{" "}
          <a className={cs.email} href="mailto:iguerrauccelli@gmail.com">
            email
          </a>
        </p>
      </div>
    </div>
  );
};
