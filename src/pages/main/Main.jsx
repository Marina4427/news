import { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { getNews, getCategories } from "../../api/apiNews";

import NewsList from "../../component/newsList/NewsList";
import Skeleton from "../../component/skeleton/Skeleton";
import NewsBanner from "../../component/newsBanner/NewsBanner";
import { mockNews } from "./mock";
import Pagination from "../../component/pagination/Pagination";
import Categories from "../../component/categories/Categories";
import Search from "../../component/search/Search";
import { useDebounce } from "../../helpers/useDebounce";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [keywords, setKeywords] = useState("");
  const debouncedKeywords = useDebounce(keywords, 1500);

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === "All" ? null : selectedCategory,
        keywords: debouncedKeywords,
      });
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(["All", ...response.categories]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory, debouncedKeywords]);

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
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Search keywords={keywords} setKeywords={setKeywords} />

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
