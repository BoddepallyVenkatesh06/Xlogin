import React, { useState } from "react";
import styles from "./styles.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setError("");
      setIsSubmitted(true);
    } else {
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  };

  return (
    <div className={styles.form}>
      <h1>Login Page</h1>
      {isSubmitted ? (
        <div>
          <p className={styles.formLabel}>Welcome, {username}!</p>
        </div>
      ) : (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          {error && <p className={styles.error}>{error}</p>}
          <div>
            <label className={styles.formLabel} htmlFor="username">
              Username:
            </label>
            <input
              className={styles.formInput}
              type="text"
              id="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className={styles.formLabel} htmlFor="password">
              Password:
            </label>
            <input
              className={styles.formInput}
              type="text"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <button className={styles.formButton} type="submit">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default App;
