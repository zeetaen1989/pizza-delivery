import { useState } from "react";
import { Header } from "@components/elements";
import { ProductList, Sidebar } from "@components/templates";
import styles from "./Menu.module.scss";

const Menu = ({ pizzaList, allCategories }) => {
  const [menuItems, setMenuItems] = useState(pizzaList);

  const filterItemsByCategory = (category) => {
    if (category === "All") {
      setMenuItems(pizzaList);
    } else {
      const newItems = pizzaList.filter((pizza) => pizza.category === category);
      setMenuItems(newItems);
    }
  };

  const filterItemsByPrice = (price) => {
    const newItems = pizzaList.filter((pizza) => pizza.prices[0] <= price);
    setMenuItems(newItems);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <Header
          title="Our Menu"
          subtitle="Various Regional Taste"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
        />
      </div>
      <div className={styles.content}>
        <Sidebar
          allCategories={allCategories}
          filterItemsByCategory={filterItemsByCategory}
          filterItemsByPrice={filterItemsByPrice}
        />
        <ProductList pizzaList={menuItems} />
      </div>
    </section>
  );
};
export default Menu;
