import Link from "next/link";
import styles from "./MobileNavLinks.module.scss";

const MobileNavLinks = ({ isMobile, closeMobileMenu }) => {
  const linkItems = [
    {
      id: 1,
      url: "/",
      text: "Home",
    },
    {
      id: 2,
      url: "/menu",
      text: "Menu",
    },
    {
      id: 3,
      url: "/#locations",
      text: "Locations",
    },
    {
      id: 4,
      url: "/contact-us",
      text: "Contact Us",
    },
  ];

  return (
    <nav className={styles.mobile__nav} aria-label="Mobile navigation links">
      <ul className={styles.mobile__list}>
        {linkItems.map((link) => (
          <li key={link.id} className={styles.mobile__link}>
            <Link href={link.url} passHref>
              <a onClick={() => isMobile && closeMobileMenu()}>{link.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavLinks;
