import Image from "next/image";
import Head from "next/head";
import { useState } from "react";

import { AddToCartBtn, Counter, Ratings } from "@components/elements";
import { sizeItems } from "@data/size-data";
import styles from "./Product.module.scss";

const Product = () => {
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    title: "Prosciutto E Unghi Pizza",
    img: "/images/Prosciutto-e-unghi-pizza.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    toppings: ["Prosciutto", "Parmigiano", "Tomato Sauce", "Mushroom"],
    price: 12.99,
    rating: 4.5,
    reviews: 84,
  };

  return (
    <>
      <Head>
        <title>
          {pizza.title} || {pizza.description}
        </title>
        <meta name="description" content={pizza.description} />
        <meta
          name="keywords"
          content={`PizzaLand, Pizza, Pizza Delivery, ${pizza.title}`}
        />
      </Head>
      <section className={styles.container}>
        <figure className={styles.container__left}>
          <Image
            src={pizza.img}
            alt={pizza.title}
            height="500"
            width="500"
            priority
          />
        </figure>
        <article className={styles.container__right}>
          <h1>{pizza.title}</h1>
          <div className={styles.review}>
            <Ratings rating={pizza.ratings} />
            <a href="#">({pizza.reviews} Reviews)</a>
          </div>
          <span className={styles.price}>$ {pizza.price[size]}</span>
          <p>{pizza.description}</p>
          <div className={styles.size}>
            <h2>Choose Your Size</h2>
            <div className={styles.size__wrapper}>
              {sizeItems.map((item) => (
                <div
                  className={styles.img__wrapper}
                  key={item.id}
                  onClick={() => setSize(item.id - 1)}
                >
                  <figure className={styles.img}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={item.height}
                      width={item.width}
                    />
                  </figure>
                  <figcaption className={styles.info}>
                    <p className={styles.info__title}>{item.title}</p>
                  </figcaption>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.toppings}>
            <h2>Add Extra Toppings</h2>
            <div className={styles.toppings__wrapper}>
              {pizza.toppings.map((item) => (
                <label key={item} className={styles.box}>
                  <p>{item}</p>
                  <input type="checkbox" />
                  <span className={styles.checkmark}></span>
                </label>
              ))}
            </div>
          </div>
          <div className={styles.bottom}>
            <Counter />
            <div className={styles.bottom__cart}>
              <AddToCartBtn />
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
export default Product;
