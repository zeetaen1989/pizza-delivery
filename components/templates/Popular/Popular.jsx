import Link from "next/link";
import { Header, OrderBtn, ProductCard } from "@components/elements";
import styles from "./Popular.module.scss";

const Popular = ({ pizzaList }) => {
  return (
    <section className={styles.container}>
      <Header
        title="Popular Products"
        subtitle="What Our Customers Love"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
      />
      <div className={styles.container__products}>
        {pizzaList.slice(0, 6).map((pizza) => (
          <ProductCard key={pizza.id} pizza={pizza} {...pizza} />
        ))}
      </div>
      <OrderBtn text="See All Menu" />
    </section>
  );
};
export default Popular;
