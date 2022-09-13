import { useState } from "react";
import { MdMenuOpen, MdRestaurantMenu } from "react-icons/md";
import { MobileNavLinks } from "@components/elements";
import styles from "./MobileNavbar.module.scss";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => (
    <MdMenuOpen className={styles.mobile__menu} onClick={toggleMenu} />
  );

  const openMenu = () => (
    <MdRestaurantMenu className={styles.mobile__menu} onClick={toggleMenu} />
  );

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <div className={styles.mobile__container}>
      {isOpen ? openMenu() : closeMenu()}
      {isOpen && (
        <MobileNavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
    </div>
  );
};

export default MobileNavbar;
