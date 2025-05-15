import { useContext, useRef } from "react";
import styles from "./styles.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const Slider = ({ children }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 150, behavior: "smooth" });
  };

  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
      <button onClick={scrollLeft}>{"<"}</button>

      <div className={styles.sliderContent} ref={sliderRef}>
        <div className={styles.sliderItems}>{children}</div>
      </div>

      <button onClick={scrollRight}>{">"}</button>
    </div>
  );
};

export default Slider;
