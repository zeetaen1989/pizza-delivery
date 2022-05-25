import Image from "next/image";
import styles from "./Error.module.scss";

const Error = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Oops!</h1>
        <h1>Page Not Found</h1>
      </header>
      <figure>
        <Image src="/images/error.png" alt="Error" height="310" width="550" />
      </figure>
      <footer className={styles.footer}>
        <h1>Sorry the page you requested was not found!</h1>
      </footer>
    </section>
  );
};
export default Error;
