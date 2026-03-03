import { useEffect, useState } from "react";
import { API } from "../../services";
import ProductList from "../ProductList";
import ProductFilters from "../ProductsFilters";
import styles from "./productsContainer.module.css";

const ProductsContainer = () => {
  const [status, setStatus] = useState("loading");
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  const getProducts = async () => {
    try {
      const data = await API({
        endpoint: "/products",
      });
      setProducts(data);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";
  const hasProducts = isDone && products.length > 0;
  const noProduct = isDone && products.length === 0;

  return (
    <div className={styles.productsWrapper}>
      <h2 className={styles.title}>Latest Products</h2>
      {isLoading && (
        <div className={styles.statusMessage}>Loading Products...</div>
      )}
      {isError && (
        <div className={styles.errorMessage}>Something Went Wrong</div>
      )}
      {noProduct && (
        <div className={styles.noProductsMessage}>Product Not available</div>
      )}

      {hasProducts && <ProductFilters setFilter={setFilter} filter={filter} />}
      {hasProducts && <ProductList products={products} filter={filter} />}
    </div>
  );
};

export default ProductsContainer;
