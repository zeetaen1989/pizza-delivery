import Link from "next/link";
import { Header } from "@components/elements";
import { ProductList } from "..";
import styles from "./Popular.module.scss";

const Popular = ({ pizzaList }) => {
  return (
    <section className={styles.container}>
      <Header
        title="Popular Products"
        subtitle="What Our Customers Love"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
      />
      <ProductList pizzaList={pizzaList} />
      <Link href="/products" passHref>
        <a className={styles.btn}>
          <span className={styles.text}>See All Products</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </Link>
    </section>
  );
};
export default Popular;
