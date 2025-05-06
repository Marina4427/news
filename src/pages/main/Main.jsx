import styles from "./styles.module.css";
import LatestNews from "../../component/latestNews/LatestNews";
import NewsByFilters from "../../component/newsByFilters/NewsByFilters";

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default Main;
