import { OrderBtn } from "@components/elements";
import Link from "next/link";
import styles from "./Register.module.scss";

const Register = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <figure className={styles.left__header}>
            <h1>PizzaLand</h1>
          </figure>
          <hr />
          <div className={styles.left__content}>
            <h2>Create An Account</h2>
            <p>Get access to Exclusive Features by creating an account</p>
            <form>
              <div className={styles.form__control}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="register"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className={styles.form__control}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="register"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className={styles.form__control}>
                <label htmlFor="password">Password</label>
                <input
                  name="register"
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className={styles.form__control}>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  name="register"
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm Your Password"
                />
              </div>
              <div className={styles.terms}>
                <input type="checkbox" name="register" id="terms" />
                <label htmlFor="terms">
                  I&apos;ve read and accept the Terms & Conditions
                </label>
              </div>
              <a className={styles.btn__register}>
                <span className={styles.text}>Register</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </form>
            <div className={styles.bottom__content}>
              <p>Already have an account?</p>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <p>
            A place where you can find the best pizza in town from various
            regions.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Register;
