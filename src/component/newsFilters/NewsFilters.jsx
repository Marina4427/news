import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../categories/Categories";
import Search from "../search/Search";
import Slider from "../slider/Slider";
import styles from "./styles.module.css";

const NewsFilters = ({filters, changeFilter}) => {
  const { data: dataCategories} = useFetch(getCategories);
    return (
    <div className={styles.filters}>
         {dataCategories ? (
        
        <Slider >
          <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) =>
            changeFilter("category", category)
          }
        />
        </Slider>
        
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
