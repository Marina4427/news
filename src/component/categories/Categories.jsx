import styles from "./styles.module.css";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => { 
  return (
    <>
      <button
        className={!selectedCategory ? styles.activeCategory : styles.categoryItem}
        onClick={() => setSelectedCategory(null)}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? styles.activeCategory : styles.categoryItem}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </>
  );
};

export default Categories;