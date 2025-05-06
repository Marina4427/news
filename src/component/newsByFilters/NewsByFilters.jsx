import styles from "./styles.module.css";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constaints";
import NewsListWithSkeleton from "../newsList/NewsList";
import NewsFilters from "../newsFilters/NewsFilters";
import { useFilters } from "../../helpers/hooks/useFilters";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getNews } from "../../api/apiNews";
import PaginationWrapper from "../paginationWrapper/PaginationWrapper";

const NewsByFilters = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: "All",
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);
  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

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

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <PaginationWrapper
        top
        bottom
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      >
        <NewsListWithSkeleton isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
