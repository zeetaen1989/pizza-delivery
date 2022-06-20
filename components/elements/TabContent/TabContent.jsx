import styles from "./TabContent.module.scss";

const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <section className={styles.container}>{children}</section>
  ) : null;
};

export default TabContent;
