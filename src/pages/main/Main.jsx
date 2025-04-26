import { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";

import NewsList from "../../component/newsList/NewsList";
import Skeleton from "../../component/skeleton/Skeleton";
import NewsBanner from '../../component/newsBanner/NewsBanner';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews();
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

   // Найти первую новость с валидной картинкой
  const bannerItem = news.find(item => item.image && item.image !== "None");
    // Отфильтровываем список новостей без баннер-новости
    const filteredNews = bannerItem 
    ? news.filter(item => item.id !== bannerItem.id)
    : news;

  return (
    <main className={styles.main}>
      {bannerItem  && !isLoading ? (
        <NewsBanner item={bannerItem} />
      ) : (
        <Skeleton type={"banner"} count={1} />
      )}

      {!isLoading ? (
        <NewsList news={filteredNews} />
      ) : (
        <Skeleton type={"item"} count={10} />
      )}
    </main>
  );
};

export default Main;