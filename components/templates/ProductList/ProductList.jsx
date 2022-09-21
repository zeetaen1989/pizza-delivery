import { useState } from "react";
import { MdGridView, MdMenu } from "react-icons/md";
import { ProductCard } from "@components/elements";
import { HorizontalProductCard } from "@components/templates";
import styles from "./ProductList.module.scss";
import Image from "next/image";

const ProductList = ({ pizzaList }) => {
  const [sort, setSort] = useState("lowest");
  const [isGrid, setIsGrid] = useState(true);

  switch (sort) {
    case "highest":
      pizzaList.sort((a, b) => b.prices[0] - a.prices[0]);
      break;
    case "ascending":
      pizzaList.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "descending":
      pizzaList.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "high":
      pizzaList.sort((a, b) => b.rating - a.rating);
      break;
    case "low":
      pizzaList.sort((a, b) => a.rating - b.rating);
      break;
    default:
      pizzaList.sort((a, b) => a.prices[0] - b.prices[0]);
      break;
  }

  return (
    <section className={styles.container}>
      <section className={styles.container__top}>
        <section className={styles.container__icons}>
          <MdGridView
            className={isGrid ? styles.active : styles.inactive}
            onClick={() => setIsGrid(true)}
          />
          <MdMenu
            className={isGrid ? styles.inactive : styles.active}
            onClick={() => setIsGrid(false)}
          />
          <p>
            {pizzaList.length} {pizzaList.length === 1 ? "Product" : "Products"}
            &nbsp;Available
          </p>
        </section>
        <section className={styles.container__sort}>
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
        </section>
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
          <h4>Please Search Again</h4>
          <p>No Products Matched Your Search Criteria!!!</p>
          <figure>
            <Image
              src="/images/empty-products.svg"
              alt="Empty Search"
              height="300"
              width="300"
            />
          </figure>
        </section>
      )}
    </section>
  );
};

export default ProductList;
