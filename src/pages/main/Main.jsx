import { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";

import NewsList from "../../component/newsList/NewsList";
import Skeleton from "../../component/skeleton/Skeleton";
import NewsBanner from "../../component/newsBanner/NewsBanner";
import { mockNews } from "./mock";
import Pagination from "../../component/pagination/Pagination";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews(currentPage, pageSize);
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // let news = mockNews;
  // Найти первую новость с валидной картинкой
  const bannerItem = news.find((item) => item.image && item.image !== "None");
  // Отфильтровываем список новостей без баннер-новости
  const filteredNews = bannerItem
    ? news.filter((item) => item.id !== bannerItem.id)
    : news;

  return (
    <main className={styles.main}>
      {bannerItem && !isLoading ? (
        <NewsBanner item={bannerItem} />
      ) : (
        <Skeleton type={"banner"} count={1} />
      )}

      <Pagination
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      {!isLoading ? (
        <NewsList news={filteredNews} />
      ) : (
        <Skeleton type={"item"} count={10} />
      )}

      <Pagination
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
};

//для работы в mock тк кол-во запросов ограничено
//   return (
//     <main className={styles.main}>
//       {bannerItem ? (
//         <NewsBanner item={bannerItem} />
//       ) : (
//         <Skeleton type={"banner"} count={1} />
//       )}

//       {filteredNews.length > 0 ? (
//         <NewsList news={filteredNews} />
//       ) : (
//         <Skeleton type={"item"} count={10} />
//       )}
//     </main>
//   );
// };

export default Main;
