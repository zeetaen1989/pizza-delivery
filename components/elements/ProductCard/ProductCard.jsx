import Image from "next/image";
import { Ratings, AddToCartBtn } from "@components/elements";
import styles from "./ProductCard.module.scss";

const Products = ({ image, title, price, rating, description }) => {
  return (
    <div className={styles.products}>
      <figure>
        <Image src={image} alt={title} height="250" width="250" />
      </figure>
      <figcaption>
        <h3>{title}</h3>
        <span className={styles.price}>${price}</span>
        <Ratings rating={rating} />
        <p>{description}</p>
      </figcaption>
      <AddToCartBtn />
    </div>
  );
};
export default Products;
