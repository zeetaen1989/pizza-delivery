import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaSearch } from "react-icons/fa";

import { Ratings, AddToCartBtn } from "@components/elements";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <section className={styles.container__card}>
        <figure className={styles.card__img}>
          <Image src={pizza.img} alt={pizza.title} height="250" width="250" />
        </figure>
        <figcaption className={styles.card__overlay}>
          <div className={styles.icons}>
            <figure className={styles.icons__heart}>
              <FaHeart style={{ cursor: "pointer" }} />
            </figure>
            <figure className={styles.icons__search}>
              <Link href={`/product/${pizza._id}`} passHref>
                <FaSearch style={{ cursor: "pointer" }} />
              </Link>
            </figure>
          </div>
        </figcaption>
      </section>
      <article>
        <h3>{pizza.title}</h3>
        <span className={styles.price}>${pizza.prices[0]}</span>
        <div className={styles.review}>
          <Ratings rating={pizza.rating} />
          <a href="#">({pizza.reviews} Reviews)</a>
        </div>
        {/* <p>{pizza.description}</p> */}
      </article>
      <AddToCartBtn />
    </div>
  );
};
export default ProductCard;
