import { TOTAL_PAGES } from "../../constants/constaints";
import NewsListWithSkeleton from "../newsList/NewsList";
import NewsFilters from "../newsFilters/NewsFilters";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import PaginationWrapper from "../paginationWrapper/PaginationWrapper";
import { useGetNewsQuery } from "../../store/services/newsApi";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../store/slices/newSlice";
import styles from "./styles.module.css";

const NewsByFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.news.filters)
  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
     keywords: debouncedKeywords,
  })

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(setFilters({key: "page_number", value: filters.page_number + 1}))
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(setFilters({key: "page_number", value: filters.page_number - 1}))
    }
  };

  const handlePageClick = (page_number) => {
    dispatch(setFilters({key: "page_number", value: page_number}))
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

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
