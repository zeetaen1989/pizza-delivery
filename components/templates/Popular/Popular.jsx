import { Header, ProductCard } from "@components/elements";
import { popularProducts } from "@data/products-data";
import styles from "./Popular.module.scss";

const Popular = () => {
  return (
    <section className={styles.container}>
      <Header
        title="Popular Products"
        subtitle="What Our Customers Love"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
      />
      <div className={styles.products}>
        {popularProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.img}
            title={product.title}
            price={product.price}
            rating={product.rating}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};
export default Popular;
