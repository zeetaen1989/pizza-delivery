import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { addProduct } from "redux/cartSlice";
import { AddToCartBtn, Ratings } from "@components/elements";
import styles from "./HorizontalProductCard.module.scss";

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
      <figure className={styles.wrapper__img}>
        <Image src={pizza.img} alt={pizza.title} height="300" width="300" />
      </figure>
      <section className={styles.info}>
        <h4>{pizza.title}</h4>
        <p className={styles.price}>${pizza.prices[0].toFixed(2)}</p>
        <Ratings rating={pizza.rating} />
        <p className={styles.info__reviews}>
          <a href="#">({pizza.reviews} Reviews)</a>
        </p>
        <p className={styles.desc_wrapper}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quibusdam doloremque cumque qui, nulla dicta nesciunt
          voluptatibus ab magnam hic facere dolor voluptates corrupti id
          delectus facilis explicabo veniam optio.&nbsp;
          <Link href={`/product/${pizza._id}`} passHref>
            <a className={styles.info__text}>More Info...</a>
          </Link>
        </p>
        <article className={styles.btn__cart} onClick={handleAddToCart}>
          <AddToCartBtn text="Add To Cart" />
        </article>
      </section>
    </section>
  );
};
export default HorizontalProductCard;
