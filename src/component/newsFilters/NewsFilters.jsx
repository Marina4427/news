import { useDispatch } from "react-redux";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import Categories from "../categories/Categories";
import Search from "../search/Search";
import Slider from "../slider/Slider";
import styles from "./styles.module.css";
import { setFilters } from "../../store/slices/newSlice";

const NewsFilters = ({filters}) => {
  const {data} = useGetCategoriesQuery();
  const dispatch = useDispatch();
    return (
    <div className={styles.filters}>
         {data ? (
        <Slider >
          <Categories
          categories={data.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) =>
            dispatch(setFilters({key: "category", value: category}))
          }
        />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => dispatch(setFilters({key: "keywords", value: keywords}))}
      />
    </div>
  );
};

export default NewsFilters;
