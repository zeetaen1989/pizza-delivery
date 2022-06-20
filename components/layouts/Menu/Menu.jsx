import { useState } from "react";

import { Header } from "@components/elements";
import { ProductList, Sidebar } from "@components/templates";
import styles from "./Menu.module.scss";

const Menu = ({ pizzaList, allCategories }) => {
  const [menuItems, setMenuItems] = useState(pizzaList);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSearch = menuItems.filter((menu) => {
    return menu.title.toLowerCase().includes(searchTerm.toLocaleLowerCase());
  });

  const filterItemsByCategory = (category) => {
    if (category === "All") {
      setMenuItems(pizzaList);
    } else {
      const newItems = pizzaList.filter((pizza) => pizza.category === category);
      setMenuItems(newItems);
    }
  };

  const filterItemsByPrice = (price) => {
    if (price === 20) {
      setMenuItems(menuItems);
    } else {
      const newItems = menuItems.filter((menu) => menu.prices[0] <= price);
      setMenuItems(newItems);
    }
  };

  return (
    <section className={styles.container}>
      <Header
        title="Our Menu"
        subtitle="Various Regional Taste"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
      />
      <section className={styles.content}>
        <Sidebar
          allCategories={allCategories}
          filterItemsByCategory={filterItemsByCategory}
          filterItemsByPrice={filterItemsByPrice}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
        <ProductList pizzaList={filteredSearch} />
      </section>
    </section>
  );
};

export default Menu;
