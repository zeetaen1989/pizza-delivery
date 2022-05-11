import Link from "next/link";
import { Header, OrderBtn } from "@components/elements";
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
      <OrderBtn text="See All Menu" />
    </section>
  );
};
export default Popular;
