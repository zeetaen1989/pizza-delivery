import { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { MdInfo } from "react-icons/md";
import styles from "./Announcement.module.scss";

const Announcement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (
    <section className={styles.modal__container}>
      <section className={styles.modal}>
        <article className={styles.conditions}>
          <h1>Terms & Conditions</h1>
          <ul>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing eliteesdfg
              Optio molestias commodi dolor illum minus voluptate illo.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing eliteesdfg
              Optio molestias commodi dolor illum minus voluptate illo.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing eliteesdfg
              Optio molestias commodi dolor illum minus voluptate illo.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing eliteesdfg
              Optio molestias commodi dolor illum minus voluptate illo.
            </li>
          </ul>
        </article>
        <button className={styles.btn__close}>
          <CgCloseO
            color="white"
            fontSize="1.5rem"
            onClick={() => setIsOpen(false)}
          />
        </button>
      </section>
    </section>
  );

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
      {isOpen && openModal}
    </section>
  );
};
export default Announcement;
