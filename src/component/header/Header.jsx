import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { formateDate } from "../../helpers/formatDate";
import { FaMoon } from "react-icons/fa";
import { PiMoonDuotone } from "react-icons/pi";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <Link to={"/"}>
          <h1 className={styles.title}>NEWS REACTIFY</h1>
        </Link>

        <p className={styles.date}>{formateDate(new Date())}</p>
      </div>
      <span className={styles.icon} onClick={toggleTheme}>
        {isDark ? (
          <PiMoonDuotone style={{ fill: "white" }} fontSize={40} />
        ) : (
          <FaMoon fontSize={32} />
        )}
      </span>
    </header>
  );
};

export default Header;
