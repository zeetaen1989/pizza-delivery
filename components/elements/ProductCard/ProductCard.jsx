import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaSearch } from "react-icons/fa";

import { Ratings, AddToCartBtn } from "@components/elements";
import styles from "./ProductCard.module.scss";

const Products = ({ image, title, description, price, rating, reviews }) => {
  return (
    <div className={styles.products}>
      <section className={styles.products__card}>
        <figure className={styles.card__img}>
          <Image src={image} alt={title} height="250" width="250" />
        </figure>
        <figcaption className={styles.card__overlay}>
          <div className={styles.icons}>
            <FaHeart style={{ cursor: "pointer" }} />
            <Link href="/product/:id" passHref>
              <FaSearch style={{ cursor: "pointer" }} />
            </Link>
          </div>
        </figcaption>
      </section>
      <article>
        <h3>{title}</h3>
        <span className={styles.price}>${price}</span>
        <div className={styles.review}>
          <Ratings rating={rating} />
          <a href="#">({reviews} Reviews)</a>
        </div>
        <p>{description}</p>
      </article>
      <AddToCartBtn />
    </div>
  );
};
export default Products;
