import Head from "next/head";
import { Register } from "@components/layouts";

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>PizzaLand || Create An Account With Us</title>
        <meta
          name="description"
          content="Choose from variety of Pizza's and order it from our platform"
        />
        <meta
          name="keywords"
          content="Popular Products, Menu, Pizza, Food, Food Delivery"
        />
      </Head>
      <Register />
    </>
  );
};
export default RegisterPage;
