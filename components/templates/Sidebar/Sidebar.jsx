import { useState } from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = ({
  allCategories,
  filterItemsByCategory,
  filterItemsByPrice,
  handleChange,
  searchTerm,
}) => {
  const [input, setInput] = useState(20);

  return (
    <section className={styles.sidebar}>
      <form role="search" className={styles.search}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <section className={styles.category}>
        <h3>Categories</h3>
        {allCategories.sort().map((category) => (
          <button
            key={category}
            className={styles.btn}
            onClick={() => filterItemsByCategory(category)}
          >
            {category}
          </button>
        ))}
      </section>
      <section className={styles.price}>
        <h3>Price</h3>
        <form role="price">
          <label htmlFor="price">$5 - ${input}</label>
          <input
            type="range"
            name="price"
            id="price"
            value={input}
            min="5"
            max="20"
            onChange={(e) => {
              setInput(e.target.value);
              filterItemsByPrice(e.target.value);
            }}
          />
        </form>
      </section>
    </section>
  );
};

export default Sidebar;
