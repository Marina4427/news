import { TOTAL_PAGES } from "../../constants/constaints";
import { usePaginationNews } from "../../helpers/hooks/usePaginationNews";
import NewsList from "../newsList/NewsList";
import PaginationWrapper from "../paginationWrapper/PaginationWrapper";

const NewsListWithPagination = ({ filters, news, isLoading }) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } =
    usePaginationNews(filters);

  return (
    <PaginationWrapper
      top
      bottom
      handlePreviousPage={handlePreviousPage}
      handleNextPage={handleNextPage}
      handlePageClick={handlePageClick}
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}
    >
      <NewsList
        direction="column"
        type="item"
        count="10"
        isLoading={isLoading}
        news={news}
      />
    </PaginationWrapper>
  );
};

export default NewsListWithPagination;
