import ProductItem from "../ProductItem";
import styles from "./productList.module.css";

const ProductList = ({ products, filter }) => {
  const visibleProducts =
    filter === "all" ? products : products.filter((i) => i.category === filter);
  return (
    <div className={styles.productList}>
      {visibleProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
