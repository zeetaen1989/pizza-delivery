import {
  FaRegCopyright,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { ourLocation } from "@data/location-data";
import styles from "./Footer.module.scss";

const Footer = () => {
  const links = [
    "About Us",
    "Menu",
    "Career",
    "Contact",
    "Privacy Policy",
    "Terms of Use",
  ];

  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <h1>PizzaLand</h1>
        <div className={styles.icons}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebook className={styles.icon} />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaTwitter className={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaInstagram className={styles.icon} />
          </a>
        </div>
        <p className={styles.copyright}>
          <FaRegCopyright />
          PizzaLand Co. Ltd.
        </p>
      </div>
      <nav className={styles.links} aria-labelledby="secondary-navigation">
        <h3 id="secondary-navigation">Quick Links</h3>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.locations}>
        <h3>Our Locations</h3>
        <ul>
          {ourLocation.map((location) => (
            <li key={location.id}>
              <p>{location.street}</p>
              <p>{location.city}</p>
              <span>{location.phone}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.hours}>
        <h3>Working Hours</h3>
        <ul>
          <li>
            <p>Monday - Friday</p>
            <p>
              <time dateTime="09:00">9:00am</time> -{" "}
              <time dateTime="21:00">9:00pm</time>
            </p>
          </li>
          <li>
            <p>Saturday - Sunday</p>
            <p>
              <time dateTime="10:00">10:00am</time> -{" "}
              <time dateTime="21:00">9:00pm</time>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
