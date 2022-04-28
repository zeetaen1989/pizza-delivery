import {
  FaRegCopyright,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer = () => {
  const ourLocation = [
    {
      id: 1,
      street: "123 Main St",
      city: "New York",
      phone: "(01) 234 5678",
    },
    {
      id: 2,
      street: "315 Broadway",
      city: "Boston",
      phone: "(01) 254 8454",
    },
    {
      id: 3,
      street: "578 Boulevard",
      city: "Los Angeles",
      phone: "(01) 567 8454",
    },
    {
      id: 4,
      street: "890 Upstate",
      city: "New Jersey",
      phone: "(01) 278 1295",
    },
  ];

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
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaInstagram />
          </a>
        </div>
        <span>
          <FaRegCopyright />
          PizzaLand Co. Ltd.
        </span>
      </div>
      <div className={styles.links}>
        <h3>Quick Links</h3>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>
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
            <span>9:00am - 9:00pm</span>
          </li>
          <li>
            <p>Saturday - Sunday</p>
            <span>10:00am - 9:00pm</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
