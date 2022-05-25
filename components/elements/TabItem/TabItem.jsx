import Image from "next/image";
import styles from "./TabItem.module.scss";

const TabItem = ({
  id,
  img,
  title,
  height,
  width,
  activeTab,
  setActiveTab,
}) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li className={styles.container}>
      <figure
        onClick={handleClick}
        className={activeTab === id ? `${styles.active}` : `${styles.inactive}`}
      >
        <Image src={img} alt={title} height={height} width={width} />
      </figure>
    </li>
  );
};
export default TabItem;
