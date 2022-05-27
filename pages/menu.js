import Head from "next/head";
import axios from "axios";
import { Menu } from "@components/layouts";

const ProductsPage = ({ pizzaList }) => {
  return (
    <>
      <Head>
        <title>Our Menu || Choose from variety of regional tastes</title>
        <meta
          name="description"
          content="Choose from variety of Pizza's and order it from our platform"
        />
        <meta
          name="keywords"
          content="Popular Products, Menu, Pizza, Food, Food Delivery"
        />
      </Head>
      <Menu pizzaList={pizzaList} />
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      pizzaList: res.data,
    },
  };
};

export default ProductsPage;
