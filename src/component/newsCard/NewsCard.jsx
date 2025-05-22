import styles from "./styles.module.css";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../image/Image";

const NewsCard = ({ item, type = "item" }) => {
  return (
    <li className={`${styles.card} ${type === "banner" ? styles.banner : ''}`}>
      {type === "banner" ? (
        <Image image={item?.image} />
      ) : (
        <div
          className={styles.wrapper}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      )}
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.autor}
        </p>
      </div>
    </li>
  );
};

export default NewsCard;
