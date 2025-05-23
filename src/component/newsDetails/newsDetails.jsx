import styles from "./styles.module.css";
import Image from "../image/Image";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";

const NewsDetails = ({ item }) => {
  return (
    <div className={styles.details}>
      <Image image={item.image} />
      <div className={styles.description}>
        <p>
          {item.description} ({item.language})
          <p className={styles.link}>
            <a target="_blank" href={item.url}>
              Read more ...
            </a>
          </p>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
        <ul>
          {item.category.map((category) => {
            return <button className={styles.active}>{category}</button>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewsDetails;
