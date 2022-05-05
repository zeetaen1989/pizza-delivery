import Link from "next/link";
import { useState } from "react";
import { MdOutlineShoppingCart, MdMenuOpen, MdClose } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linksLeft = ["Home", "Products"];
  const linksRight = ["Chef", "Contact"];

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
        <AiOutlinePhone fontSize="2rem" />
        <div className={styles.left__info}>
          <h1>Order Now!</h1>
          <span>+01 234 567 89</span>
        </div>
      </div>
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
