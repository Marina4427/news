import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { formateDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { PiMoonDuotone } from "react-icons/pi";

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS REACTIFY</h1>
        <p className={styles.date}>{formateDate(new Date())}</p>
      </div>

      <span className={styles.icon} onClick={toggleTheme}>
        {isDark ? <PiMoonDuotone style={{ fill: "white" }} /> : <FaMoon />}
      </span>
    </header>
  );
};

export default Header;
