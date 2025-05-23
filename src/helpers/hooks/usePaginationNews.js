import { useDispatch } from "react-redux";
import { TOTAL_PAGES } from "../../constants/constaints";
import { setFilters } from "../../store/slices/newSlice";

export const usePaginationNews = (filters) => {
  const dispatch = useDispatch();

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number + 1 })
      );
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number - 1 })
      );
    }
  };

  const handlePageClick = (page_number) => {
    dispatch(setFilters({ key: "page_number", value: page_number }));
  };

  return { handleNextPage, handlePreviousPage, handlePageClick };
};
