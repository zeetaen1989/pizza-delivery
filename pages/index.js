import Head from "next/head";
import axios from "axios";
import {
  About,
  Hero,
  Locations,
  Newsletter,
  Popular,
  Testimonials,
} from "@components/templates";

const Home = ({ pizzaList }) => {
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
      <About />
      <Popular pizzaList={pizzaList} />
      <Locations />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
