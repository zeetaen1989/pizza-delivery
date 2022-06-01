import { useState } from "react";
import { MdGridView, MdMenu } from "react-icons/md";
import { ProductCard } from "@components/elements";
import { HorizontalProductCard } from "@components/templates";
import styles from "./ProductList.module.scss";
import Image from "next/image";

const ProductList = ({ pizzaList }) => {
  const [sort, setSort] = useState("lowest");
  const [isGrid, setIsGrid] = useState(true);

  if (sort === "lowest") {
    pizzaList.sort((a, b) => a.prices[0] - b.prices[0]);
  } else if (sort === "highest") {
    pizzaList.sort((a, b) => b.prices[0] - a.prices[0]);
  } else if (sort === "ascending") {
    pizzaList.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "descending") {
    pizzaList.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sort === "high") {
    pizzaList.sort((a, b) => b.rating - a.rating);
  } else {
    pizzaList.sort((a, b) => a.rating - b.rating);
  }

  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <div className={styles.icons__container}>
          <MdGridView
            className={isGrid ? styles.active : styles.inactive}
            onClick={() => setIsGrid(true)}
          />
          <MdMenu
            className={isGrid ? styles.inactive : styles.active}
            onClick={() => setIsGrid(false)}
          />
          {pizzaList.length > 1 ? (
            <p>{pizzaList.length} Products Available</p>
          ) : (
            <p>{pizzaList.length} Product Available</p>
          )}
        </div>
        <div className={styles.sort__container}>
          <p>Sort by:</p>
          <select
            name="price"
            onChange={(e) => setSort(e.target.value)}
            defaultValue="lowest"
          >
            <option value="lowest">Price (Lowest)</option>
            <option value="highest">Price (Highest)</option>
            <option value="ascending">Name (Ascending)</option>
            <option value="descending">Name (Descending)</option>
            <option value="high">Rating (High)</option>
            <option value="low">Rating (Low)</option>
          </select>
        </div>
      </section>
      {pizzaList.length > 0 ? (
        isGrid ? (
          <section className={styles.products__grid}>
            {pizzaList.map((pizza) => (
              <ProductCard pizza={pizza} key={pizza._id} />
            ))}
          </section>
        ) : (
          <section className={styles.products__line}>
            {pizzaList.map((pizza) => (
              <HorizontalProductCard pizza={pizza} key={pizza._id} {...pizza} />
            ))}
          </section>
        )
      ) : (
        <section className={styles.products__empty}>
          <h3>Please Search Again</h3>
          <p>Sorry, no products available matched your search criteria!!!</p>
          <Image
            src="/images/empty-products.svg"
            alt="Empty Search"
            height="300"
            width="300"
          />
        </section>
      )}
    </div>
  );
};

export default ProductList;
