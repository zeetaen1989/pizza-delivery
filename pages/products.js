import Head from "next/head";
import { Products } from "@components/layouts";

const ProductsPage = () => {
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
      <Products />
    </>
  );
};
export default ProductsPage;
