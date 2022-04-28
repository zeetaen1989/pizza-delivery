import { Announcement } from "@components/elements";
import { Footer, Navbar } from "@components/templates";

const Layout = ({ children }) => {
  return (
    <>
      <Announcement />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
