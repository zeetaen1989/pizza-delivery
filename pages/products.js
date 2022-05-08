import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { Header } from "@components/elements";
import { ProductList } from "@components/templates";

const ProductsPage = ({ pizzaList }) => {
  const router = useRouter();

  const path = router.pathname.split("/")[1];

  return (
    <>
      <Head>
        <title>
          Our Products || Choose from multitude of customer favorite Pizza
        </title>
        <meta
          name="description"
          content="Choose from variety of Pizza's and order it from our platform"
        />
        <meta
          name="keywords"
          content="Popular Products, Products, Pizza, Food, Food Delivery"
        />
      </Head>
      <Products pizzaList={pizzaList} />
    </>
  );
};
export default ProductsPage;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};

export default ProductsPage;
