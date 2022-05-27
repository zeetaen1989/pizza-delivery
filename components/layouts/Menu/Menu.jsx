import { useRouter } from "next/router";
import { Header } from "@components/elements";
import { ProductList, Sidebar } from "@components/templates";
import styles from "./Menu.module.scss";

const Menu = ({ pizzaList }) => {
  const router = useRouter();
  const path = router.pathname.split("/")[1];

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
        <Sidebar />
        <ProductList pizzaList={pizzaList} path={path} />
      </div>
    </section>
  );
};
export default Menu;
