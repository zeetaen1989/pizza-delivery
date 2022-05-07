import { products } from "@data/products-data";
import { Header, ProductCard } from "@components/elements";
import styles from "./Products.module.scss";

const ProductsPage = ({ pizza }) => {
  return (
    <section className={styles.container}>
      <Header
        title="Our Products"
        subtitle="Various Regional Taste"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
      />
      <div className={styles.container__products}>
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
      </div>
    </section>
  );
};

export default ProductsPage;
