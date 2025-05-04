import styles from "./styles.module.css";
import { getNews, getCategories } from "../../api/apiNews";
import NewsList from "../../component/newsList/NewsList";
import NewsBanner from "../../component/newsBanner/NewsBanner";
import Pagination from "../../component/pagination/Pagination";
import Categories from "../../component/categories/Categories";
import Search from "../../component/search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constaints";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";

const Main = () => {

  const {filters, changeFilter} = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "All",
    keywords: "",

  })

  const debouncedKeywords = useDebounce(filters.keywords, 1500);
  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data: dataCategories } = useFetch(getCategories);

  
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (page_number) => {
    changeFilter("page_number", page_number);
  };

  // Найти первую новость с валидной картинкой
  const bannerItem = data?.news?.find(
    (item) => item.image && item.image !== "None"
  );
  // Отфильтровываем список новостей без баннер-новости
  const filteredNews = bannerItem
    ? data?.news.filter((item) => item.id !== bannerItem.id)
    : data?.news || [];

  return (
    <main className={styles.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) =>
            changeFilter("category", category)
          }
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />

      <NewsBanner
        isLoading={isLoading}
        item={data?.news.length > 0 && bannerItem}
      />

      <Pagination
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />

      <NewsList isLoading={isLoading} news={filteredNews} />

      <Pagination
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />
    </main>
  );
};

export default Main;
