import { useState } from "react";
import { useSelector } from "react-redux";

import {
  CartItems,
  CustomerInfo,
  Delivery,
  Payment,
} from "@components/templates";
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
            img="/images/cart.svg"
            title="Shopping Cart"
            height="50"
            width="50"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <hr />
          <TabItem
            id="2"
            img="/images/contact.svg"
            title="Contact Info"
            height="40"
            width="40"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <hr />
          <TabItem
            id="3"
            img="/images/pay.svg"
            title="Contact Info"
            height="40"
            width="40"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <hr />
          <TabItem
            id="4"
            img="/images/deliver.svg"
            title="Delivery"
            height="60"
            width="60"
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
          <TabContent id="4" activeTab={activeTab}>
            <Delivery
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
