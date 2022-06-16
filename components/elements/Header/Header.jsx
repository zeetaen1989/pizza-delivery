import styles from "./Header.module.scss";

const Header = ({ title, subtitle, description }) => {
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <p className={styles.desc}>{description}</p>
    </article>
  );
};
export default Header;
