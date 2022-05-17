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
        <figure className={styles.checked__icon}>
          <Image
            src="/images/checked.svg"
            alt="Checked"
            height="20"
            width="20"
          />
        </figure>
      </figure>
    </li>
  );
};
export default TabItem;
