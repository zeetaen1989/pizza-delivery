import Image from "next/image";
import styles from "./TabItem.module.scss";

const TabItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li className={styles.container}>
      <figure
        onClick={handleClick}
        className={activeTab === id ? `${styles.active}` : `${styles.inactive}`}
      >
        <h1>{title}</h1>
      </figure>
    </li>
  );
};
export default TabItem;
