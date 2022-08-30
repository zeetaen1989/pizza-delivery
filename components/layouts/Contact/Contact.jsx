import { useId } from "react";
import { FaPhone, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdMail, MdLocationPin } from "react-icons/md";
import { Header } from "@components/elements";
import styles from "./Contact.module.scss";

const Contact = () => {
  const id = useId();

  return (
    <section className={styles.container}>
      <Header title="Contact Us" subtitle="Get In Touch With Us" />
      <section className={styles.container__contact}>
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
          <figure className={styles.social__links}>
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
          </figure>
        </article>
        <article className={styles.right}>
          <h1>Contact Us</h1>
          <form>
            <article className={styles.form__control}>
              <label htmlFor={`${id}-fullName`}>Full Name</label>
              <input
                id={`${id}-fullName`}
                type="text"
                name="fullName"
                placeholder="Enter Your Full Name"
              />
            </article>
            <article className={styles.form__control}>
              <label htmlFor={`${id}-email`}>Email</label>
              <input
                id={`${id}-email`}
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
              />
            </article>
            <article className={styles.form__control}>
              <label htmlFor={`${id}-phone`}>Phone Number</label>
              <input
                id={`${id}-phone`}
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
              />
            </article>
            <article className={styles.form__control}>
              <label htmlFor={`${id}-message`}>Message</label>
              <textarea
                id={`${id}-message`}
                type="text"
                placeholder="Write Your Message"
              />
            </article>
            <button className={styles.btn} type="submit">
              Send Message
            </button>
          </form>
        </article>
      </section>
    </section>
  );
};
export default Contact;
