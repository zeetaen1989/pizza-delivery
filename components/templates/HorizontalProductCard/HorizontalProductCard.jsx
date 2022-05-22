import Image from "next/image";
import { useDispatch } from "react-redux";

import { addProduct } from "redux/cartRedux";
import { AddToCartBtn, Ratings } from "@components/elements";
import styles from "./HorizontalProductCard.module.scss";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const HorizontalProductCard = ({ pizza }) => {
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
      <figure>
        <Image src={pizza.img} alt={pizza.title} height="300" width="300" />
        <figcaption className={styles.overlap}>
          <Link href={`/product/${pizza._id}`} passHref>
            <FaSearch className={styles.icon} />
          </Link>
        </figcaption>
      </figure>
      <article>
        <h1>{pizza.title}</h1>
        <span className={styles.price}>${pizza.prices[0].toFixed(2)}</span>
        <Ratings rating={pizza.rating} />
        <span className={styles.info__reviews}>
          <a href="#">({pizza.reviews} Reviews)</a>
        </span>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt
          voluptatibus ab magnam hic facere dolor voluptates corrupti id
          delectus facilis explicabo veniam optio.
        </p>
        <div className={styles.btn__cart} onClick={handleAddToCart}>
          <AddToCartBtn text="Add To Cart" />
        </div>
      </article>
    </section>
  );
};
export default HorizontalProductCard;
