import { useState } from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = ({
  allCategories,
  filterItemsByCategory,
  filterItemsByPrice,
}) => {
  const [input, setInput] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.sidebar}>
      <section className={styles.search}>
        <input
          id="name"
          name="name"
          type="text"
          value={searchTerm}
          placeholder="Search"
          onChange={handleChange}
        />
      </section>
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
        <form>
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
    </div>
  );
};
export default Sidebar;
