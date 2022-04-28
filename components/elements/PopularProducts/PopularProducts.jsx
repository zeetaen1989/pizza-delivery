import { popularProducts } from "@data/products-data";
import { Products } from "@components/elements";
import styles from "./PopularProducts.module.scss";

const PopularProducts = () => {
  return (
    <div className={styles.container}>
      {popularProducts.map((product) => (
        <Products
          key={product.id}
          image={product.img}
          title={product.title}
          price={product.price}
          rating={product.rating}
          description={product.description}
        />
      ))}
    </div>
  );
};
export default PopularProducts;
