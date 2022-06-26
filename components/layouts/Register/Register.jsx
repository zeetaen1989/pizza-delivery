import Link from "next/link";
import styles from "./Register.module.scss";
import Image from "next/image";

const Register = () => {
  return (
    <section className={styles.container}>
      <section className={styles.wrapper}>
        <section className={styles.left}>
          <figure className={styles.left__header}>
            <h1>PizzaLand</h1>
          </figure>
          <hr />
          <article className={styles.left__content}>
            <h2>Create An Account</h2>
            <p>Get access to Exclusive Features by creating an account</p>
            <form>
              <article className={styles.form__control}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </article>
              <article className={styles.form__control}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </article>
              <article className={styles.form__control}>
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </article>
              <article className={styles.form__control}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Your Password"
                />
              </article>
              <article className={styles.terms}>
                <input type="checkbox" name="register" id="terms" />
                <label htmlFor="terms">
                  I&apos;ve read and accept the Terms & Conditions
                </label>
              </article>
              <a className={styles.btn}>
                <span className={styles.text}>Register</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </form>
            <article className={styles.bottom__content}>
              <p>Already have an account?</p>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </article>
          </article>
        </section>
        <div className={styles.right}>
          <Image
            src="/images/register-delivery.svg"
            alt="Delivery"
            height="500"
            width="700"
          />
          <p>
            Get your favorite pizza delivered to your doorstep within 30
            minutes. Moneyback guarantee.
          </p>
        </div>
      </section>
    </section>
  );
};
export default Register;
