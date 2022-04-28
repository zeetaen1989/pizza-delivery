import Head from "next/head";
import { Hero, Popular } from "@components/templates";

const Home = () => {
  return (
    <>
      <Head>
        <title>PizzaLand || A platform to order pizza of your choice</title>
        <meta
          name="description"
          content="This is a food delivery platform where you can order food and get it delivered at your doorstep"
        />
        <meta name="keywords" content="FoodLand, Food, Food Delivery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Popular />
    </>
  );
};

export default Home;
