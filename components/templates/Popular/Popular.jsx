import { Header, PopularProducts } from "@components/elements";
import styles from "./Popular.module.scss";

const Popular = () => {
  return (
    <section className={styles.container}>
      <Header
        title="Popular Products"
        subtitle="What Our Customers Love"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
      />
      <PopularProducts />
    </section>
  );
};
export default Popular;
