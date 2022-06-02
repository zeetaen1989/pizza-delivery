import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";

import { addProduct } from "redux/cartRedux";
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
        count: 1,
      })
    );
  };

  return (
    <section className={styles.container}>
      <figure className={styles.wrapper__img}>
        <Image src={pizza.img} alt={pizza.title} height="200" width="200" />
        <figcaption className={styles.overlap}>
          <Link href={`/product/${pizza._id}`} passHref>
            <FaSearch className={styles.icon} />
          </Link>
        </figcaption>
      </figure>
      <article className={styles.info}>
        <Ratings rating={pizza.rating} />
        <span className={styles.info__reviews}>
          <a href="#">({pizza.reviews} Reviews)</a>
        </span>
        <div className={styles.info__text}>
          {pizza.title.length > 18 ? (
            <h4>{pizza.title.slice(0, 15)}....</h4>
          ) : (
            <h4>{pizza.title}</h4>
          )}
          {pizza.description.length > 50 ? (
            <p>{pizza.description.slice(0, 50)}....</p>
          ) : (
            <p>{pizza.description}</p>
          )}
        </div>
        <div className={styles.info__bottom}>
          <span className={styles.price}>${pizza.prices[0].toFixed(2)}</span>
          <div className={styles.btn__cart} onClick={handleAddToCart}>
            <AddToCartBtn text="+" />
          </div>
        </div>
      </article>
    </section>
  );
};
export default ProductCard;
