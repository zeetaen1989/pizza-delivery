import Link from "next/link";
import styles from "./Login.module.scss";
import Image from "next/image";

const Login = () => {
  return (
    <section className={styles.container}>
      <section className={styles.wrapper}>
        <section className={styles.left}>
          <figure>
            <Image
              src="/images/login-enjoy.svg"
              alt="Enjoy"
              height="500"
              width="700"
            />
          </figure>
          <p>
            Enjoy freshly made hot and tasty pizza with your loved ones and
            family.
          </p>
        </section>
        <section className={styles.right}>
          <figure className={styles.right__header}>
            <h1>PizzaLand</h1>
          </figure>
          <hr />
          <article className={styles.right__content}>
            <h2>Log In</h2>
            <p>Welcome to Pizzaland. Please Log In to access your profile.</p>
            <form>
              <article className={styles.form__control}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="login"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </article>
              <article className={styles.form__control}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="login"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </article>
              <Link href="#">
                <a className={styles.forgot}>Forgot Password?</a>
              </Link>
              <article className={styles.remember}>
                <input type="checkbox" name="login" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </article>
              <a className={styles.btn}>
                <span className={styles.text}>Login</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </form>
            <article className={styles.bottom__content}>
              <p>Don&apos;t have an account?</p>
              <Link href="/register">
                <a>Register</a>
              </Link>
            </article>
          </article>
        </section>
      </section>
    </section>
  );
};
export default Login;
