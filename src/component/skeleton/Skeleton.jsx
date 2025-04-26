import styles from "./styles.module.css";

const Skeleton = ({ count = 1, type = "banner" }) => {
  return (
    <ul className={styles.list}>
      {[...Array(count)].map((_, index) => (
        <li
          key={index}
          className={type === "banner" ? styles.banner : styles.item}
        ></li>
      ))}
    </ul>
  );
};

export default Skeleton;
