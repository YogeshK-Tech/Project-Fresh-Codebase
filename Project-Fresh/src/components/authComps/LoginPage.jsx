import React, { useState } from "react";
import styles from "../../styles/SignupPage.module.css"; // Import CSS Module styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <center className={styles.center_tag}>
      <div className={styles.main_body}>
        <h2>Login Now</h2>
        <h3>Enter Your Email and Password</h3>
        <form action="">
          <div className={styles.inputContainer}>
            <input
              type="email"
              name="Email"
              id="login-user-email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="user-email">Enter your Email</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="login-user-password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="user-password">Enter password</label>
            <span
              className={styles.passwordToggle}
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </span>
          </div>

          <button className={styles.green_button}>Continue</button>
        </form>
        <p>--- Or ---</p>
        <button className={styles.green_button}>Back to signup</button>
        <div className={styles.other_buttons}>
          <button className={styles.google_button}>
            <span>
              <FontAwesomeIcon icon={faGoogle} />
            </span>
            Continue with Google
          </button>
        </div>
      </div>
    </center>
  );
};

export default LoginPage;
