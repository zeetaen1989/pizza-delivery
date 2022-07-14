import axios from "axios";
import { Product } from "@components/layouts";
import { Reviews } from "@components/templates";
import Head from "next/head";

const ProductPage = ({ pizza }) => {
  return (
    <>
      <Head>
        <title>
          {pizza.title} || {pizza.description}
        </title>
        <meta name="description" content={pizza.description} />
        <meta
          name="keywords"
          content={`PizzaLand, Pizza, Pizza Delivery, ${pizza.title}`}
        />
      </Head>
      <Product pizza={pizza} />
      <Reviews />
    </>
  );
};
export default ProductPage;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};
