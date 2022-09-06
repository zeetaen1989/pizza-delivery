import Head from "next/head";
import axios from "axios";
import { Admin } from "@components/layouts";

const AdminPage = ({ products, orders }) => {
  return (
    <>
      <Head>
        <title>PizzaLand || Admin Dashboard</title>
        <meta name="description" content="Administrator Dashboard" />
        <meta
          name="keywords"
          content="Admin Panel, Popular Products, Menu, Pizza, Food, Food Delivery"
        />
      </Head>
      <Admin products={products} orders={orders} />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.NEXT_PUBLIC_TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      products: productRes.data,
      orders: orderRes.data,
    },
  };
};

export default AdminPage;
