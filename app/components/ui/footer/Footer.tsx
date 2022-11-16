import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiGithub,
  SiSass,
} from "react-icons/si";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <SiTypescript className={styles.icon} />
        <SiRedux className={styles.icon} />
        <SiNextdotjs className={styles.icon} />
        <SiGithub className={styles.icon} />
        <SiSass className={styles.icon} />
      </div>
    </div>
  );
};

export default Footer;
