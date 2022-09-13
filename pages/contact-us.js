import Head from "next/head";
import { Contact } from "@components/layouts";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us || Get In Touch With Us</title>
        <meta
          name="description"
          content="Choose from variety of Pizza's and order it from our platform"
        />
        <meta
          name="keywords"
          content="Popular Products, Products, Pizza, Food, Food Delivery"
        />
      </Head>
      <Contact />
    </>
  );
};
export default ContactPage;
