import Head from "next/head";
import { Orders } from "@components/layouts";

const OrderPage = () => {
  return (
    <>
      <Head>
        <title>Orders || Confirm your orders and pay</title>
        <meta
          name="description"
          content="Order Page which displays the orders of the users"
        />
        <meta
          name="keywords"
          content="Popular Products, Products, Pizza, Food, Food Delivery"
        />
      </Head>
      <Orders />
    </>
  );
};
export default OrderPage;
