import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const catList = [
    "All",
    "Italian",
    "American",
    "Canadian",
    "Greek",
    "Vegan",
    "Miscellaneous",
  ];

  return (
    <div className={styles.sidebar}>
      <section className={styles.search}>
        <input type="text" placeholder="Search" />
      </section>
      <section className={styles.category}>
        <h3>Categories</h3>
        <ul>
          {catList.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
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
