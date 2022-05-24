import Head from "next/head";
import axios from "axios";
import { Orders } from "@components/layouts";

const OrdersPage = ({ order }) => {
  return (
    <>
      <Head>
        <title>PizzaLand || Your Orders Info</title>
        <meta
          name="description"
          content="Choose from variety of Pizza's and order it from our platform"
        />
        <meta
          name="keywords"
          content="Popular Products, Menu, Pizza, Food, Food Delivery"
        />
      </Head>
      <Orders order={order} />
    </>
  );
};
export default OrdersPage;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};
