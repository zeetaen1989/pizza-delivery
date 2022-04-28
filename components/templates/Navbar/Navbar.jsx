import Image from "next/image";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const linksLeft = ["Home", "Products", "Menu"];
  const linksRight = ["Locations", "Chef", "Contact"];

  return (
    <header className={styles.container}>
      <section className={styles.left}>
        <Link href="/" passHref>
          <AiOutlinePhone fontSize="2rem" />
        </Link>
        <div className={styles.left__info}>
          <h1>Order Now!</h1>
          <span>+01 234 567 89</span>
        </div>
      </section>
      <nav className={styles.center}>
        <ul>
          <li>
            {linksLeft.map((link) =>
              link === "Home" ? (
                <Link href="/" passHref key={link}>
                  <a className={styles.center__links}>{link}</a>
                </Link>
              ) : (
                <Link href={`/${link.toLowerCase()}`} passHref key={link}>
                  <a className={styles.center__links}>{link}</a>
                </Link>
              )
            )}
          </li>
        </ul>
        <Link href="/" passHref>
          <h1>PizzaLand</h1>
        </Link>
        <ul>
          <li>
            {linksRight.map((link) => (
              <Link href={`/${link.toLowerCase()}`} passHref key={link}>
                <a className={styles.center__links}>{link}</a>
              </Link>
            ))}
          </li>
        </ul>
      </nav>
      <section className={styles.right}>
        <Link href="/cart" passHref>
          <MdOutlineShoppingCart fontSize="2rem" cursor="pointer" />
        </Link>
        <span>3</span>
      </section>
    </header>
  );
};

export default Navbar;
