import { useState } from "react";
import { useSelector } from "react-redux";

import { CartItems, CustomerInfo, Payment } from "@components/templates";
import { TabContent, TabItem } from "@components/elements";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { products, total } = useSelector((state) => state.cart);
  const [activeTab, setActiveTab] = useState("1");

  return (
    <section className={styles.container}>
      <div className={styles.tabs}>
        <ul className={styles.nav}>
          <TabItem
            id="1"
            title="Cart"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <hr />
          <TabItem
            id="2"
            title="Customer Info"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <hr />
          <TabItem
            id="3"
            title="Payment"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </ul>
        <div className={styles.tab__content}>
          <TabContent id="1" activeTab={activeTab}>
            <CartItems
              products={products}
              total={total}
              setActiveTab={setActiveTab}
            />
          </TabContent>
          <TabContent id="2" activeTab={activeTab}>
            <CustomerInfo
              products={products}
              total={total}
              setActiveTab={setActiveTab}
            />
          </TabContent>
          <TabContent id="3" activeTab={activeTab}>
            <Payment
              products={products}
              total={total}
              setActiveTab={setActiveTab}
            />
          </TabContent>
        </div>
      </div>
    </section>
  );
};
export default Cart;
