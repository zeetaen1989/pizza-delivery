import styles from "./TabContent.module.scss";

const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <div className={styles.container}>{children}</div>
  ) : null;
};

export default TabContent;
