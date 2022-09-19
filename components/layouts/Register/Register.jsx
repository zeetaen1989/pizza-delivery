import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useId } from "react";
import styles from "./Register.module.scss";
import { FaCheck, FaInfoCircle, FaTimes } from "react-icons/fa";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const id = useId();

  const userRef = useRef();
  const emailRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current;
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);

    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrorMessage("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrorMessage("Invalid Entry!!!");
      return;
    }
  };

  return (
    <section className={styles.container}>
      <section className={styles.wrapper}>
        <section className={styles.left}>
          <p
            ref={errorRef}
            className={`${errorMessage ? styles.error__msg : styles.offscreen}`}
            aria-live="assertive"
          ></p>
          <figure className={styles.left__header}>
            <h1>PizzaLand</h1>
          </figure>
          <hr />
          <article className={styles.left__content}>
            <h2>Create An Account</h2>
            <p>Get access to Exclusive Features by creating an account</p>
            <form>
              <article className={styles.form__control}>
                <label htmlFor={`${id}-name`}>Name</label>
                <input
                  id={`${id}-name`}
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                />
              </article>
              <article className={styles.form__control}>
                <label htmlFor={`${id}-email`}>Email</label>
                <input
                  id={`${id}-email`}
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </article>
              <article className={styles.form__control}>
                <label htmlFor={`${id}-password`}>Password</label>
                <input
                  id={`${id}-password`}
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                />
              </article>
              <article className={styles.form__control}>
                <label htmlFor={`${id}-confirmPassword`}>
                  Confirm Password
                </label>
                <input
                  id={`${id}-confirmPassword`}
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Your Password"
                />
              </article>
              <article className={styles.terms}>
                <input type="checkbox" name="terms" id={`${id}-terms`} />
                <label htmlFor={`${id}-terms`}>
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
