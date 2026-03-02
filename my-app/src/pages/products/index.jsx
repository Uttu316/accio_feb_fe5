import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductsContainer from "../../components/ProductsContainer";
import styles from "./productsPage.module.css";

const ProductsPage = () => {
  return (
    <>
      <Header title="My Store" />
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <div className={styles.pageTitle}>Products Page</div>
        </div>
        <ProductsContainer />
      </div>
      <Footer />
    </>
  );
};
export default ProductsPage;
