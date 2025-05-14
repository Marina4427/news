import { useContext } from "react";
import styles from "./styles.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const Pagination = ({
  totalPages,
  handlePageClick,
  handlePreviousPage,
  handleNextPage,
  currentPage,
}) => {
  
  const {isDark} = useContext(ThemeContext);
  return (
    <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light} `}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumber}
              key={index}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        className={styles.arrow}
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
