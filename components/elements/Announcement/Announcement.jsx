import { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { MdInfo } from "react-icons/md";
import styles from "./Announcement.module.scss";

const Announcement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const termsAndConditions =
    "Lorem ipsum, dolor sit amet consectetur adipisicing eliteesd Optio molestias commo dolor illum minus voluptate illo.";

  return (
    <section className={styles.container}>
      <p>
        Get Free Delivery on Orders above $50! Delivery within 30min or Money
        Back Guarantee!!
      </p>
      <button className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
        Terms & Conditions
        <MdInfo />
      </button>
      {isOpen && (
        <div className={styles.modal__container}>
          <section className={styles.modal}>
            <article className={styles.conditions}>
              <header className={styles.header}>
                <h1>Terms & Conditions</h1>
              </header>
              <ul>
                <li>{termsAndConditions}</li>
                <li>{termsAndConditions}</li>
                <li>{termsAndConditions}</li>
                <li>{termsAndConditions}</li>
              </ul>
            </article>
            <button className={styles.btn__close}>
              <CgCloseO
                className={styles.icon__close}
                onClick={() => setIsOpen(false)}
              />
            </button>
          </section>
        </div>
      )}
    </section>
  );
};
export default Announcement;
