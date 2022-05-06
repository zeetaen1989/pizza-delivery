import { FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdMail, MdLocationPin } from "react-icons/md";
import { Header } from "@components/elements";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.container}>
      <Header title="Contact Us" subtitle="Get In Touch With Us" />
      <div className={styles.container__contact}>
        <article className={styles.left}>
          <figure>
            <div className={styles.icons}>
              <FaPhone />
            </div>
            <figcaption>
              <span>(01) 234 5678</span>
            </figcaption>
          </figure>
          <figure>
            <div className={styles.icons}>
              <MdMail />
            </div>
            <figcaption>
              <span>info@foodland.com</span>
            </figcaption>
          </figure>
          <figure>
            <div className={styles.icons}>
              <MdLocationPin />
            </div>
            <figcaption>
              <span>123 Main Street, New York</span>
            </figcaption>
          </figure>
          <h1>Follow Us</h1>
          <div className={styles.social__links}>
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
        </article>
        <article className={styles.right}>
          <h1>Contact Us</h1>
          <form>
            <div className={styles.form__control}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter Your Full Name"
              />
            </div>
            <div className={styles.form__control}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className={styles.form__control}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className={styles.form__control}>
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                id="message"
                placeholder="Write Your Message"
              />
            </div>
          </form>
        </article>
      </div>
    </section>
  );
};
export default Contact;
