import { Hamburger } from "../Nav/Hamburger";
import cs from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className={cs.frame}>
      <div className={cs.contactPage}>
        <Hamburger />
        <p>
          <b>Isabella Guerra Uccelli </b>is a Spanish and English language
          writer and researcher. Her creative writing vary in style and are
          inspired from personal experience. Some of her writing is bilingual,
          transitioning from one language to another. Born in Boston,
          Massachusetts, she is of Peruvian and Puerto Rican background.
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
