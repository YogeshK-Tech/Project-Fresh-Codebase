import React from "react";
import styles from "../styles/NavBarMain.module.css"; // Import CSS Module styles

const NavBarMain = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
        </div>
        <nav>
          <ul className={styles.mainMenu}>
            <li>
              <a href="#">Trading Simulator</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Library</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.authButtons}>
          <button className={styles.loginButton}>Login</button>
          <button className={styles.signupButton}>Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default NavBarMain;
