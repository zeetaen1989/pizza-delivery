import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FoodLand || A platform to order food of your choice</title>
        <meta
          name="description"
          content="This is a food delivery platform where you can order food and get it delivered at your doorstep"
        />
        <meta name="keywords" content="FoodLand, Food, Food Delivery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>HomePage</main>
    </div>
  );
};

export default Home;
