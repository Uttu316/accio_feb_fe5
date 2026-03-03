import styles from "./productFilters.module.css";

const ProductFilters = ({ filter, setFilter }) => {
  return (
    <div className={styles.filtersContainer}>
      <FilterItem
        label={"All"}
        selected={filter}
        value={"all"}
        onClick={setFilter}
      />
      <FilterItem
        label={"Men's Clothing"}
        selected={filter}
        onClick={setFilter}
        value={"men's clothing"}
      />
      <FilterItem
        label={"Women's Clothing"}
        selected={filter}
        value={"women's clothing"}
        onClick={setFilter}
      />
      <FilterItem
        label={"Jewelery"}
        selected={filter}
        value="jewelery"
        onClick={setFilter}
      />
      <FilterItem
        label={"Electronics"}
        selected={filter}
        value={"electronics"}
        onClick={setFilter}
      />
    </div>
  );
};

const FilterItem = ({ label, onClick, value, selected }) => {
  return (
    <button
      className={`${styles.filterButton} ${selected === value ? styles.selected : ""}`}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );
};

export default ProductFilters;
