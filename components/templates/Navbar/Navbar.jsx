import Link from "next/link";
import { useState } from "react";
import { MdOutlineShoppingCart, MdMenuOpen, MdClose } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => (
    <MdMenuOpen className={styles.right__menu} onClick={toggleMenu} />
  );

  const openMenu = () => (
    <MdClose className={styles.right__menu} onClick={toggleMenu} />
  );

  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <FaPhone fontSize="2rem" />
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
            <Link href="/products" passHref>
              <a className={styles.center__links}>Products</a>
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
        <Link href="/cart" passHref>
          <MdOutlineShoppingCart className={styles.right__icon} />
        </Link>
        <span>3</span>
        {isOpen ? openMenu() : closeMenu()}
      </div>
    </section>
  );
};

export default Navbar;
