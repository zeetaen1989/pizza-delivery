import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import { imgSlider } from "@data/slider-data";
import styles from "./Hero.module.scss";
import { OrderBtn } from "@components/elements";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeOutRef = useRef(null);

  const handleArrow = (direction) => {
    if (direction === "left") {
      setCurrentSlide(
        currentSlide > 0 ? currentSlide - 1 : imgSlider.length - 1
      );
    } else {
      setCurrentSlide(
        currentSlide < imgSlider.length - 1 ? currentSlide + 1 : 0
      );
    }
  };

  const resetTimeOut = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  };

  useEffect(() => {
    resetTimeOut();

    timeOutRef.current = setTimeout(() => {
      setCurrentSlide(
        currentSlide < imgSlider.length - 1 ? currentSlide + 1 : 0
      );
    }, 6000);

    return () => {
      resetTimeOut();
    };
  }, [currentSlide]);

  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <section
          className={styles.wrapper}
          style={{ transform: `translateX(${-100 * currentSlide}vw)` }}
        >
          {imgSlider.map((img) => (
            <div className={styles.slider} key={img.id}>
              <article>
                <h1>{img.title}</h1>
                <p>{img.subtitle}</p>
                <div className={styles.btn__order}>
                  <OrderBtn text="Order Now" />
                </div>
              </article>
              <figure className={styles.slider__img}>
                <Image
                  src={img.img}
                  alt="Pizza"
                  height={550}
                  width={950}
                  objectFit="contain"
                  priority
                />
              </figure>
            </div>
          ))}
        </section>
      </div>
      <div className={styles.bottom}>
        <section className={styles.arrow__left}>
          <MdArrowBackIosNew
            className={styles.arrow}
            onClick={() => handleArrow("left")}
          />
        </section>
        {imgSlider.map((item) => {
          return (
            <span
              className={
                currentSlide === item.id - 1
                  ? `${styles.dot}`
                  : `${styles.dot} ${styles.active}`
              }
              key={item.id}
              onClick={() => setCurrentSlide(item.id - 1)}
            ></span>
          );
        })}
        <section className={styles.arrow__right}>
          <MdArrowForwardIos
            className={styles.arrow}
            onClick={() => handleArrow("right")}
          />
        </section>
      </div>
    </section>
  );
};
export default Hero;
