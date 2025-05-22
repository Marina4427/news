import NewsFilters from "../newsFilters/NewsFilters";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import {
  useGetCategoriesQuery,
  useGetNewsQuery,
} from "../../store/services/newsApi";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import NewsListWithPagination from "../NewsListWithPagination/NewsListWithPagination";

const NewsByFilters = () => {
  const filters = useSelector((state) => state.news.filters);
  const { data: categoriesData } = useGetCategoriesQuery();
  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data: newsData, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={categoriesData?.categories || []} />

      <NewsListWithPagination
        isLoading={isLoading}
        news={newsData?.news || []}
        filters={filters}
      />
    </section>
  );
};

export default NewsByFilters;
