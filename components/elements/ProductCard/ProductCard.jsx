import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";

import { addProduct } from "redux/cartSlice";
import { Ratings, AddToCartBtn } from "@components/elements";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ pizza }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        ...pizza,
        price: pizza.prices[0],
        size: 0,
        quantity: 1,
        totalPrice: pizza.prices[0] * 1,
      })
    );
  };

  return (
    <section className={styles.container}>
      <figure className={styles.wrapper__img}>
        <Image
          src={pizza.img}
          alt={pizza.title}
          height="200"
          width="200"
          priority
        />
        <figcaption className={styles.overlap}>
          <Link href={`/product/${pizza._id}`} passHref>
            <FaSearch className={styles.icon} />
          </Link>
        </figcaption>
      </figure>
      <section className={styles.info}>
        <Ratings rating={pizza.rating} />
        <p className={styles.info__reviews}>
          <a href="#">({pizza.reviews} Reviews)</a>
        </p>
        <article className={styles.info__text}>
          {pizza.title.length > 18 ? (
            <h3>
              <p className={styles.tooltip}>{pizza.title}</p>
              {pizza.title.slice(0, 16)}...
            </h3>
          ) : (
            <h3>{pizza.title}</h3>
          )}
          {pizza.description.length > 50 ? (
            <p className={styles.desc}>{pizza.description.slice(0, 50)}...</p>
          ) : (
            <p className={styles.desc}>{pizza.description}</p>
          )}
        </article>
        <section className={styles.info__bottom}>
          <p className={styles.price}>${pizza.prices[0].toFixed(2)}</p>
          <article className={styles.btn__cart} onClick={handleAddToCart}>
            <AddToCartBtn text="+" />
          </article>
        </section>
      </section>
    </section>
  );
};
export default ProductCard;
