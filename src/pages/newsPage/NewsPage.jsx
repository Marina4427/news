import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import NewsDetails from "../../component/newsDetails/newsDetails";

const NewsPage = () => {
  const currentNews = useSelector((state) => state.news.currentNews);

  if (!currentNews) {
    return (
      <div>
        <h1>Cannot find news...</h1>
        <Link to="/">
          <h3>Go to main page</h3>
        </Link>
      </div>
    );
  }

  return (
    <main className={styles.news}>
      <h1>{currentNews.title}</h1>
      <NewsDetails item={currentNews} />
    </main>
  );
};

export default NewsPage;
