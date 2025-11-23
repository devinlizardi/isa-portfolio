import { Hamburger } from "../Nav/Hamburger";
import cs from './Contact.module.scss'

export const Contact = () => {
  return <div className={cs.frame}>
    <div className={cs.contactPage}>
      <Hamburger />
      <h1 className={cs.contactTitle}>Contact</h1>
      <p>
        <br />
        Isabella Guerra Uccelli
        <br />
        <br />

        Email:
        <br />

        iguerrauccelli@gmail.com
      </p>
    </div></div>

};
