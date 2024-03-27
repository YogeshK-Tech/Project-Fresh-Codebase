import styles from "../../styles/PanelNavbar.module.css";

const PanelNavbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
        </div>
        <nav>
          <ul className={styles.mainMenu}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Positions</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Funds</a>
            </li>
          </ul>
        </nav>
        <div className={styles.authButtons}>
          <button className={styles.profileButton}>Yogesh Kumar</button>
        </div>
      </div>
    </header>
  );
};
export default PanelNavbar;
