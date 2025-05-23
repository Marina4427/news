import { useDispatch } from "react-redux";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";
import NewsList from "../newsList/NewsList";
import styles from "./styles.module.css";
import { setCurrentNews } from "../../store/slices/newSlice";
import { useNavigate } from "react-router-dom";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  const navigateTo = (news) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

  return (
    <section className={styles.section}>
      <NewsList
        type="banner"
        direction="row"
        count="24"
        news={data && data.news}
        isLoading={isLoading}
        viewNewsSlot={(news) => (
          <p className={styles.link} onClick={() => navigateTo(news)}> View more...</p>
        )}
      />
    </section>
  );
};

export default LatestNews;
