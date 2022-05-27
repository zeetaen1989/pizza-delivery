import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  MdOutlineShoppingCart,
  MdMenuOpen,
  MdAccountCircle,
  MdRestaurantMenu,
} from "react-icons/md";
import { FaPhone } from "react-icons/fa";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  const [isOpen, setIsOpen] = useState(false);

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
    <section className={styles.container}>
      <div className={styles.left}>
        <FaPhone fontSize="1.5rem" />
        <div className={styles.left__info}>
          <h1>Order Now!</h1>
          <span>+01 234 567 89</span>
        </div>
      </div>
      <nav className={styles.center}>
        <ul>
          <li>
            <Link href="/" passHref>
              <a className={styles.center__links}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/menu" passHref>
              <a className={styles.center__links}>Menu</a>
            </Link>
          </li>
        </ul>
        <Link href="/" passHref>
          <h1>PizzaLand</h1>
        </Link>
        <ul>
          <li>
            <Link href="/#locations" passHref>
              <a className={styles.center__links}>Locations</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <a className={styles.center__links}>Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.right}>
        <div className={styles.right__account}>
          <button className={styles.btn__link}>
            <MdAccountCircle className={styles.icon} />
          </button>
          <div className={styles.dropdown__menu}>
            <div className={styles.triangle}></div>
            <Link href="/login" passHref>
              <a>Login</a>
            </Link>
            <hr />
            <Link href="/register" passHref>
              <a>Register</a>
            </Link>
          </div>
        </div>
        <div className={styles.right__cart}>
          <Link href="/cart" passHref>
            <MdOutlineShoppingCart className={styles.icon} />
          </Link>
          {quantity > 0 && <span className={styles.quantity}>{quantity}</span>}
        </div>
        {isOpen ? openMenu() : closeMenu()}
      </div>
    </section>
  );
};

export default Navbar;
