import { useGetLatestNewsQuery } from "../../store/services/newsApi";
import BannersListWithSkeleton from "../bannersList/BannersList";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery();
  return (
    <section className={styles.section}>
      <BannersListWithSkeleton
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
};

export default LatestNews;
