import styles from "./styles.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsCard from "../newsCard/NewsCard";

const NewsList = ({ news, type = "item"}) => {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => {
        return (
          <NewsCard
            key={item.id}
            item={item}
            type={type}
          />
        );
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList);

export default NewsListWithSkeleton;
