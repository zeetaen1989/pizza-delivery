import Image from "next/image";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Header } from "@components/elements";
import { testimonialsData } from "@data/testimonials-data";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "left") {
      setCurrentSlide(
        currentSlide > 0 ? currentSlide - 1 : testimonialsData.length - 1
      );
    } else {
      setCurrentSlide(
        currentSlide < testimonialsData.length - 1 ? currentSlide + 1 : 0
      );
    }
  };

  return (
    <section className={styles.container}>
      <Header
        title="Testimonials"
        subtitle="What Our Customers Say"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
      />
      <div className={styles.testimonials}>
        <div
          className={styles.testimonials__left}
          onClick={() => handleArrow("left")}
        >
          <FaArrowAltCircleLeft />
        </div>
        <div
          className={styles.testimonials__wrapper}
          style={{ transform: `translateX(${-100 * currentSlide}vw)` }}
        >
          {testimonialsData.map((testimonial) => (
            <article key={testimonial.id} className={styles.slider}>
              <figure className={styles.img}>
                <Image
                  src={testimonial.img}
                  alt={testimonial.title}
                  height={70}
                  width={70}
                />
              </figure>
              <figcaption className={styles.info}>
                <h3>{testimonial.title}</h3>
                <p>{testimonial.description}</p>
              </figcaption>
            </article>
          ))}
        </div>
        <div
          className={styles.testimonials__right}
          onClick={() => handleArrow("right")}
        >
          <FaArrowAltCircleRight />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
