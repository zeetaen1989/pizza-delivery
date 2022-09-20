import Link from "next/link";
import styles from "./AuthenticationLink.module.scss";

const AuthenticationLink = ({ linkDescription, linkName }) => {
  return (
    <article className={styles.container}>
      <p>{linkDescription}</p>
      <Link href={`/${linkName.toLowerCase()}`}>
        <a>{linkName}</a>
      </Link>
    </article>
  );
};

export default AuthenticationLink;
