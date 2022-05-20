import Head from "next/head";
import { Login } from "@components/layouts";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>PizzaLand || Login</title>
        <meta
          name="description"
          content="Choose from variety of Pizza's and order it from our platform"
        />
        <meta
          name="keywords"
          content="Popular Products, Menu, Pizza, Food, Food Delivery"
        />
      </Head>
      <Login />
    </>
  );
};
export default LoginPage;
