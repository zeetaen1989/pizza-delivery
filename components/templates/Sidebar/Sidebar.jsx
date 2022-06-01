import styles from "./Sidebar.module.scss";

const Sidebar = ({ categories, filterItems }) => {
  return (
    <div className={styles.sidebar}>
      <section className={styles.search}>
        <input type="text" placeholder="Search" />
      </section>
      <section className={styles.category}>
        <h3>Categories</h3>
        {categories.sort().map((category) => (
          <button
            key={category}
            className={styles.btn}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </section>
      <section className={styles.price}>
        <h3>Price</h3>
        <label htmlFor="price">$5 - $50</label>
        <input type="range" name="price" id="price" />
      </section>
    </div>
  );
};
export default Sidebar;
