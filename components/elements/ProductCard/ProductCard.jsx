import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/cartRedux";
import { FaSearch } from "react-icons/fa";

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
    <div className={styles.container}>
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
          <p>{pizza.description}</p>
        </div>
        <div className={styles.info__bottom}>
          <span className={styles.price}>${pizza.prices[0]}</span>
          <button className={styles.btn} onClick={handleAddToCart}>
            +
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM272 180H316V224C316 235 324.1 244 336 244C347 244 356 235 356 224V180H400C411 180 420 171 420 160C420 148.1 411 140 400 140H356V96C356 84.95 347 76 336 76C324.1 76 316 84.95 316 96V140H272C260.1 140 252 148.1 252 160C252 171 260.1 180 272 180zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>
            </div>
          </button>
        </div>
      </article>
    </div>
  );
};
export default ProductCard;
