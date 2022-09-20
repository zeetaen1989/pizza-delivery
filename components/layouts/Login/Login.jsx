import Link from "next/link";
import { useState, useEffect, useId, useRef } from "react";
import { useContext } from "react";
import AuthContext from "context/AuthProvider";
import {
  AuthenticationBtn,
  AuthenticationImage,
  AuthenticationLink,
  AuthenticationSuccess,
} from "@components/elements";
import styles from "./Login.module.scss";
import { useState } from "react";

const Login = () => {
  const id = useId();

  const emailRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setSuccess(true);
  };

  return (
    <section className={styles.container}>
      <section className={styles.wrapper}>
        <section className={styles.left}>
          <AuthenticationImage
            imgSrc="/images/login-enjoy.svg"
            altText="Enjoy"
            imgCaption="Enjoy freshly made hot and tasty pizza with your loved ones and family."
          />
        </section>
        {success ? (
          <section className={styles.success}>
            <AuthenticationSuccess
              title="Login Successful!"
              linkName="Return to Homepage"
              linkURL=""
            />
          </section>
        ) : (
          <section className={styles.right}>
            <p
              ref={errorRef}
              className={`${
                errorMessage ? styles.error__msg : styles.offscreen
              }`}
              aria-live="assertive"
            ></p>
            <figure className={styles.right__header}>
              <h1>PizzaLand</h1>
            </figure>
            <hr />
            <article className={styles.right__content}>
              <h2>Log In</h2>
              <p>Welcome to Pizzaland. Please Log In to access your profile.</p>
              <form onSubmit={handleSubmit}>
                <article className={styles.form__control}>
                  <label htmlFor={`${id}-email`}>Email</label>
                  <input
                    id={`${id}-email`}
                    type="email"
                    name="email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter Your Email"
                    required
                  />
                </article>
                <article className={styles.form__control}>
                  <label htmlFor={`${id}-password`}>Password</label>
                  <input
                    id={`${id}-password`}
                    type="password"
                    name="password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="Enter Your Password"
                    required
                  />
                </article>
                <Link href="#">
                  <a className={styles.forgot}>Forgot Password?</a>
                </Link>
                <article className={styles.remember}>
                  <input
                    type="checkbox"
                    name="remember"
                    id={`${id}-remember`}
                  />
                  <label htmlFor={`${id}-remember`}>Remember Me</label>
                </article>
                <AuthenticationBtn btnName="Login" />
              </form>
              <AuthenticationLink
                linkDescription="Don't have an account?"
                linkName="Register"
              />
            </article>
          </section>
        )}
      </section>
    </section>
  );
};
export default Login;
