import { Announcement } from "@components/elements";
import { Footer, Navbar } from "@components/templates";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  const path = router.pathname.split("/")[1];

  return (
    <>
      {path === "register" || path === "login" ? (
        children
      ) : (
        <>
          <Announcement />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
