import { products } from "@data/products-data";
import { ProductCard } from "@components/elements";
import styles from "./Products.module.scss";

const ProductsPage = () => {
  return (
    <section className={styles.container}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.img}
          title={product.title}
          price={product.price}
          rating={product.rating}
          description={product.description}
        />
      ))}
    </section>
  );
};

export default ProductsPage;
