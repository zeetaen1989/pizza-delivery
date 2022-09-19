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

    setSuccess(true);
  };

  return (
    <section className={styles.container}>
      <section className={styles.wrapper}>
        {success ? (
          <section>
            <h1>Registration Successful!</h1>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </section>
        ) : (
          <section className={styles.left}>
            <p
              ref={errorRef}
              className={`${
                errorMessage ? styles.error__msg : styles.offscreen
              }`}
              aria-live="assertive"
            ></p>
            <figure className={styles.left__header}>
              <h1>PizzaLand</h1>
            </figure>
            <hr />
            <article className={styles.left__content}>
              <h2>Create An Account</h2>
              <p>Get access to Exclusive Features by creating an account</p>
              <form onSubmit={handleSubmit}>
                <article className={styles.form__control}>
                  <label htmlFor={`${id}-name`}>
                    Name
                    <span
                      className={`${validName ? styles.valid : styles.hide}`}
                    >
                      <FaCheck className={styles.form__icons} />
                    </span>
                    <span
                      className={`${
                        validName || !user ? styles.hide : styles.invalid
                      }`}
                    >
                      <FaTimes className={styles.form__icons} />
                    </span>
                  </label>
                  <div className={styles.input__field}>
                    <input
                      id={`${id}-name`}
                      ref={userRef}
                      type="text"
                      name="name"
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      aria-invalid={validName ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                      placeholder="Enter Your Name"
                      required
                    />
                    <p
                      id="uidnote"
                      className={`${
                        userFocus && user && !validName
                          ? styles.instructions
                          : styles.offscreen
                      }`}
                    >
                      <FaInfoCircle className={styles.info__icons} />
                      4 to 24 characters.
                      <br />
                      Must begin with a letter.
                      <br />
                      Letters, numbers, underscores, hyphens allowed.
                    </p>
                  </div>
                </article>
                <article className={styles.form__control}>
                  <label htmlFor={`${id}-email`}>
                    Email
                    <span className={validEmail ? styles.valid : styles.hide}>
                      <FaCheck className={styles.form__icons} />
                    </span>
                    <span
                      className={
                        validEmail || !email ? styles.hide : styles.invalid
                      }
                    >
                      <FaTimes className={styles.form__icons} />
                    </span>
                  </label>
                  <div className={styles.input__field}>
                    <input
                      id={`${id}-email`}
                      type="email"
                      name="email"
                      ref={emailRef}
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={validEmail ? "false" : "true"}
                      aria-describedby="emailnote"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      placeholder="Enter Your Email"
                      required
                    />
                    <p
                      id="emailnote"
                      className={`${
                        emailFocus && email && !validEmail
                          ? styles.instructions
                          : styles.offscreen
                      }`}
                    >
                      <FaInfoCircle className={styles.info__icons} />
                      Please enter valid email address!
                    </p>
                  </div>
                </article>
                <article className={styles.form__control}>
                  <label htmlFor={`${id}-password`}>
                    Password
                    <span className={validPwd ? styles.valid : styles.hide}>
                      <FaCheck className={styles.form__icons} />
                    </span>
                    <span
                      className={
                        validPwd || !pwd ? styles.hide : styles.invalid
                      }
                    >
                      <FaTimes className={styles.form__icons} />
                    </span>
                  </label>
                  <div className={styles.input__field}>
                    <input
                      id={`${id}-password`}
                      name="password"
                      type="password"
                      autoComplete="off"
                      onChange={(e) => setPwd(e.target.value)}
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      placeholder="Enter Your Password"
                      required
                    />
                    <p
                      id="pwdnote"
                      className={`${
                        pwdFocus && !validPwd
                          ? styles.instructions
                          : styles.offscreen
                      }`}
                    >
                      <FaInfoCircle className={styles.info__icons} />
                      8 to 24 characters.
                      <br />
                      Must have one lowercase letter.
                      <br />
                      Must have one uppercase letter.
                      <br />
                      Must have one number.
                      <br />
                      Must have one special character.
                    </p>
                  </div>
                </article>
                <article className={styles.form__control}>
                  <label htmlFor={`${id}-confirmPassword`}>
                    Confirm Password
                    <span
                      className={
                        validMatch && matchPwd ? styles.valid : styles.hide
                      }
                    >
                      <FaCheck className={styles.form__icons} />
                    </span>
                    <span
                      className={
                        validMatch || !matchPwd ? styles.hide : styles.invalid
                      }
                    >
                      <FaTimes className={styles.form__icons} />
                    </span>
                  </label>
                  <div className={styles.input__field}>
                    <input
                      id={`${id}-confirmPassword`}
                      name="confirmPassword"
                      type="password"
                      autoComplete="off"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                      placeholder="Confirm Your Password"
                      required
                    />
                    <p
                      id="confirmnote"
                      className={`${
                        matchFocus && matchPwd && !validMatch
                          ? styles.instructions
                          : styles.offscreen
                      }`}
                    >
                      <FaInfoCircle className={styles.info__icons} />
                      Passwords did not match!
                    </p>
                  </div>
                </article>
                <article className={styles.terms}>
                  <input type="checkbox" name="terms" id={`${id}-terms`} />
                  <label htmlFor={`${id}-terms`}>
                    I&apos;ve read and accept the Terms & Conditions
                  </label>
                </article>
                <button className={styles.btn} role="button">
                  <span className={styles.text}>Register</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </form>
              <article className={styles.bottom__content}>
                <p>Already have an account?</p>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </article>
            </article>
          </section>
        )}
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
