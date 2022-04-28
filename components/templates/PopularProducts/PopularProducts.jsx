import { Ratings } from "@components/elements";
import { products } from "@data/products-data";
import Image from "next/image";
import styles from "./PopularProducts.module.scss";

const PopularProducts = () => {
  return (
    <section className={styles.container}>
      <header>
        <h1>Our Popular Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          doloremque facilis sit! Reprehenderit molestiae iusto sunt unde veniam
          doloremque velit laudantium similique nihil odio, harum totam odit!
          Perspiciatis, ipsum ad!
        </p>
      </header>
      <article>
        {products.map((product) => (
          <div className={styles.products} key={product.id}>
            <figure>
              <Image
                src={product.img}
                alt={product.title}
                height="250"
                width="250"
              />
            </figure>
            <figcaption>
              <h3>{product.title}</h3>
              <span>${product.price}</span>
              <Ratings rating={product.rating} />
              <p>{product.description}</p>
            </figcaption>
            <button className={styles.btn}>
              Add To Cart
              <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM272 180H316V224C316 235 324.1 244 336 244C347 244 356 235 356 224V180H400C411 180 420 171 420 160C420 148.1 411 140 400 140H356V96C356 84.95 347 76 336 76C324.1 76 316 84.95 316 96V140H272C260.1 140 252 148.1 252 160C252 171 260.1 180 272 180zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>
              </div>
            </button>
          </div>
        ))}
      </article>
    </section>
  );
};
export default PopularProducts;
