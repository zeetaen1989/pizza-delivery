import styles from "./Header.module.scss";

const Header = ({ title, subtitle, description }) => {
  return (
    <section className={styles.container}>
      <span className={styles.top__text}>{title}</span>
      <h1>{subtitle}</h1>
      <p>{description}</p>
    </section>
  );
};
export default Header;
