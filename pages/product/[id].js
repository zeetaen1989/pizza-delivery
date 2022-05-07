import axios from "axios";
import { Product } from "@components/layouts";

const ProductPage = ({ pizza }) => {
  return <Product pizza={pizza} />;
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
