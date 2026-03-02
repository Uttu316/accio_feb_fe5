import styles from "./productFilters.module.css";

const ProductFilters = () => {
  return (
    <div className={styles.filtersContainer}>
      <button className={styles.filterButton}>All</button>
      <button className={styles.filterButton}>Men's Clothing</button>
      <button className={styles.filterButton}>Women's Clothing</button>
      <button className={styles.filterButton}>Jewelery</button>
      <button className={styles.filterButton}>Electronics</button>
    </div>
  );
};

export default ProductFilters;
