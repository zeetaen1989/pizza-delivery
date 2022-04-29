import Head from "next/head";
import { Cart } from "@components/layouts";

const CartPage = () => {
  return (
    <>
      <Head>
        <title>Cart || </title>
        <meta
          name="description"
          content="This is a shopping cart page display all the items in the cart"
        />
        <meta
          name="keywords"
          content="Popular Products, Products, Pizza, Food, Food Delivery"
        />
      </Head>
      <Cart />
    </>
  );
};
export default CartPage;
