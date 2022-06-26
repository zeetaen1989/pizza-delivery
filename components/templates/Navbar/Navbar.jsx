import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  MdOutlineShoppingCart,
  MdMenuOpen,
  MdAccountCircle,
  MdRestaurantMenu,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FaPhone } from "react-icons/fa";

import { linksLeft, linksRight } from "@data/nav-data";
import { ActiveLink } from "@components/elements";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => (
    <MdMenuOpen className={styles.right__menu} onClick={toggleMenu} />
  );

  const openMenu = () => (
    <MdRestaurantMenu className={styles.right__menu} onClick={toggleMenu} />
  );

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
          {quantity > 0 && <span className={styles.quantity}>{quantity}</span>}
        </section>
        {isOpen ? openMenu() : closeMenu()}
      </section>
    </header>
  );
};

export default Navbar;
