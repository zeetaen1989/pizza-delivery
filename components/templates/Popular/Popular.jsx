import { Header, ProductCard } from "@components/elements";
import styles from "./Popular.module.scss";

const Popular = ({ pizzaList }) => {
  return (
    <section className={styles.container}>
      <Header
        title="Popular Products"
        subtitle="What Our Customers Love"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
      />
      <div className={styles.products}>
        {pizzaList.map((pizza) => (
          <ProductCard
            pizza={pizza}
            key={pizza._id}
            image={pizza.img}
            title={pizza.title}
            description={pizza.description}
            price={pizza.price}
            rating={pizza.rating}
            reviews={pizza.reviews}
          />
        ))}
      </div>
    </section>
  );
};
export default Popular;
