import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./ActiveLink.module.scss";

const ActiveLink = ({ link }) => {
  const router = useRouter();

  const style = {
    color:
      router.asPath === link.url ? "hsl(200, 19%, 18%)" : "hsl(0, 65%, 51%)",
  };

  return (
    <Link href={link.url} passHref>
      <a className={styles.center__links} style={style}>
        {link.text}
      </a>
    </Link>
  );
};
export default ActiveLink;
