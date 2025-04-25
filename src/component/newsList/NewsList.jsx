import styles from "./styles.module.css";
import NewsItem from "../newsItem/NewItem";

const NewsList = ({news}) => {
    return (
        <ul className={styles.list}>
        {news.map(item => {
            return <NewsItem key={item.id} item={item}></NewsItem>
        })}
        </ul>
      );
}
 
export default NewsList;