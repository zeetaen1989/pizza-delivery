import { MdSend } from "react-icons/md";
import { Header } from "@components/elements";
import styles from "./Newsletter.module.scss";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.container}>
      <Header
        title="Subscribe to Newsletter"
        subtitle="Get Discounts and Benefits"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare."
      />
      <div className={styles.newsletter}>
        <form>
          <input type="email" placeholder="Enter Your Email" />
          <button onClick={handleSubmit}>
            <div className={styles.icon}>
              <MdSend />
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};
export default Newsletter;
