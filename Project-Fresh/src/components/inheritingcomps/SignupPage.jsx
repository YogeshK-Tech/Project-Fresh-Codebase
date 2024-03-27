import React, { useState } from "react";
import styles from "../../styles/SignupPage.module.css"; // Import CSS Module styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSignupWithEmail = () => {
    // Logic for signing up with email
    console.log(
      "Signing up with email:",
      email,
      password,
      confirmPassword,
      acceptedTerms
    );
  };

  const handleSignupWithMobile = () => {
    // Logic for signing up with mobile number
    console.log("Signing up with mobile number");
  };

  const handleSignupWithGoogle = () => {
    // Logic for signing up with Google
    console.log("Signing up with Google");
  };

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  return (
    <center className={styles.center_tag}>
      <div className={styles.main_body}>
        <h2>Get Started Now</h2>
        <h3>Please fill your credentials to continue.</h3>
        <form action="">
          <div className={styles.inputContainer}>
            <input
              type="email"
              name="Email"
              id="user-email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="user-email">Enter your Email</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              name="password"
              id="user-password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="user-password">Enter password</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              name="password"
              id="user-password-confirmation"
              placeholder=" "
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="user-password-confirmation">Confirm password</label>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" name="terms-conditions-acceptancy" id="" />I
            accept the terms and conditions
          </div>
          <button className={styles.green_button}>Continue</button>
        </form>
        <p>--- Or ---</p>
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

export default SignupPage;
