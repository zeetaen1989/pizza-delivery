import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./AdminLogin.module.scss";

const AdminLogin = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <section className={styles.container}>
      <article className={styles.content}>
        <h2>Admin Login</h2>
        <form>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Your Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.btn} onClick={handleClick}>
            Log In
          </button>
          {error && (
            <span className={styles.error}>Invalid Username or Password</span>
          )}
        </form>
      </article>
    </section>
  );
};
export default AdminLogin;
