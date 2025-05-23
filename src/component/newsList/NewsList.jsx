import styles from "./styles.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsCard from "../newsCard/NewsCard";

const NewsList = ({ news, type = "item", viewNewsSlot }) => {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => {
        return (
          <NewsCard
            key={item.id}
            item={item}
            type={type}
            viewNewsSlot={viewNewsSlot}
          />
        );
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList);

export default NewsListWithSkeleton;
