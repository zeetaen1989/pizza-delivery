import Head from "next/head";
import { AdminLogin } from "@components/layouts";

const AdminLoginPage = () => {
  return (
    <>
      <Head>
        <title>Admin Login</title>
      </Head>
      <AdminLogin />
    </>
  );
};
export default AdminLoginPage;
