import { ProductCard } from "@components/elements";
import styles from "./ProductList.module.scss";

const ProductList = ({ pizzaList, path }) => {
  return (
    <div className={styles.products}>
      {path
        ? pizzaList.map((pizza) => (
            <ProductCard pizza={pizza} key={pizza._id} {...pizza} />
          ))
        : pizzaList
            .slice(0, 6)
            .map((pizza) => (
              <div key={pizza._id}>
                {pizza.rating >= 4.5 && (
                  <ProductCard pizza={pizza} {...pizza} />
                )}
              </div>
            ))}
    </div>
  );
};

export default ProductList;
