import { Hamburger } from "../Nav/Hamburger";
import cs from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className={cs.frame}>
      <div className={cs.contactPage}>
        <Hamburger />
        <h1 className={cs.contactTitle}>Contact</h1>
        <p>
          <b>Isabella Guerra Uccelli </b>is a spanish and english language
          writer and researcher
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
