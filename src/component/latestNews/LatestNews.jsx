import { useGetLatestNewsQuery } from "../../store/services/newsApi";
import NewsList from "../newsList/NewsList";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery();
  return (
    <section className={styles.section}>
      <NewsList
        type="banner"
        direction = "row"
        count = "24"
        news={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
};

export default LatestNews;
