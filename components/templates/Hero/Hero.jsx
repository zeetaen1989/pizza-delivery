import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import { imgSlider } from "@data/slider-data";
import styles from "./Hero.module.scss";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const timeOutRef = useRef(null);

  const handleArrow = (direction) => {
    if (direction === "left") {
      setCurrentSlide(
        currentSlide !== imgSlider.length - 1 ? currentSlide + 1 : 0
      );
    } else {
      setCurrentSlide(
        currentSlide !== 0 ? currentSlide - 1 : imgSlider.length - 1
      );
    }
  };

  console.log(currentSlide);

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
    }, 3500);

    return () => {
      resetTimeOut();
    };
  }, [currentSlide]);

  return (
    <div className={styles.container}>
      <section
        className={styles.arrow}
        style={{ left: "1rem", fontSize: "3rem" }}
        onClick={() => handleArrow("left")}
      >
        <MdArrowBackIosNew />
      </section>
      <section
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * currentSlide}vw)` }}
      >
        {imgSlider.map((img) => (
          <div className={styles.slider} key={img.id}>
            <article>
              <h1>{img.title}</h1>
              <h2>Pizza</h2>
              <span>{img.percentage} Off</span>
              <Link href="/cart" passHref>
                <a className={styles.btn}>
                  <span>Order Now</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              </Link>
            </article>
            <figure>
              <Image
                src={img.img}
                alt="Pizza"
                height={500}
                width={540}
                objectFit="contain"
                priority
              />
            </figure>
          </div>
        ))}
      </section>
      <section
        className={styles.arrow}
        style={{ right: "1rem", fontSize: "3rem" }}
        onClick={() => handleArrow("left")}
      >
        <MdArrowForwardIos />
      </section>
    </div>
  );
};
export default Hero;
