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
          description={product.description}
          price={product.price}
          rating={product.rating}
          reviews={product.reviews}
        />
      ))}
    </section>
  );
};

export default ProductsPage;
