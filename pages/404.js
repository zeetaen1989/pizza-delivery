import { Error } from "@components/layouts";
import Head from "next/head";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>PizzaLand || 404 Page Not Found</title>
        <meta name="description" content="Error 404 Page Not Found" />
        <meta
          name="keywords"
          content="Error, 404, Popular Products, Menu, Pizza, Food, Food Delivery"
        />
      </Head>
      <Error />
    </>
  );
};
export default ErrorPage;
