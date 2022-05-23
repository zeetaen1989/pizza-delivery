import Link from "next/link";
import styles from "./Login.module.scss";
import Image from "next/image";

const Login = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Image
            src="/images/delivery.png"
            alt="Delivery"
            height="500"
            width="700"
          />
          <p>
            Get your favorite pizza delivered to your doorstep in just a few
            minutes.
          </p>
        </div>
        <div className={styles.right}>
          <figure className={styles.right__header}>
            <h1>PizzaLand</h1>
          </figure>
          <hr />
          <div className={styles.right__content}>
            <h2>Log In</h2>
            <p>Welcome to Pizzaland. Please Log In to access your profile.</p>
            <form>
              <div className={styles.form__control}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="login"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className={styles.form__control}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="login"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </div>
              <Link href="#">
                <a className={styles.forgot}>Forgot Password?</a>
              </Link>
              <div className={styles.remember}>
                <input type="checkbox" name="login" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <a className={styles.btn}>
                <span className={styles.text}>Login</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </form>
            <div className={styles.bottom__content}>
              <p>Don&apos;t have an account?</p>
              <Link href="/register">
                <a>Register</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
