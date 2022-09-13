import Link from "next/link";
import { useSelector } from "react-redux";
import {
  MdOutlineShoppingCart,
  MdAccountCircle,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FaPhone } from "react-icons/fa";

import { linksLeft, linksRight } from "@data/nav-data";
import { ActiveLink, MobileNavbar } from "@components/elements";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className={styles.container}>
      <figure className={styles.left}>
        <FaPhone fontSize="1.5rem" />
        <figcaption className={styles.left__info}>
          <h1>Order Now!</h1>
          <span>+01 234 567 89</span>
        </figcaption>
      </figure>
      <nav className={styles.center} aria-label="primary-navigation">
        <ul>
          {linksLeft.map((link) => (
            <li key={link.id}>
              <ActiveLink link={link} />
            </li>
          ))}
        </ul>
        <ul>
          <Link href="/" passHref>
            <h1>PizzaLand</h1>
          </Link>
        </ul>
        <ul>
          {linksRight.map((link) => (
            <li key={link.id}>
              <ActiveLink link={link} />
            </li>
          ))}
        </ul>
      </nav>
      <section className={styles.right}>
        <section className={styles.right__account}>
          <button className={styles.btn__link}>
            <MdAccountCircle className={styles.icon} />
            <MdOutlineKeyboardArrowDown />
          </button>
          <article className={styles.dropdown__menu}>
            <div className={styles.triangle}></div>
            <Link href="/login" passHref>
              <a>Login</a>
            </Link>
            <hr />
            <Link href="/register" passHref>
              <a>Register</a>
            </Link>
          </article>
        </section>
        <section className={styles.right__cart}>
          <Link href="/cart" passHref>
            <MdOutlineShoppingCart className={styles.icon} />
          </Link>
          {totalQuantity > 0 && (
            <span className={styles.quantity}>{totalQuantity}</span>
          )}
        </section>
        <MobileNavbar />
      </section>
    </header>
  );
};

export default Navbar;
