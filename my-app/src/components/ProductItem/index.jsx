import styles from "./productItem.module.css";

const ProductItem = ({ product }) => {
  const { image, title, price, description, category, rating } = product;

  return (
    <div className={styles.productItem}>
      <img src={image} alt={title} className={styles.image} />
      <p className={styles.category}>{category}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>${price}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.rating}>
        <span>Rating: {rating?.rate}</span>
        <span>({rating?.count} reviews)</span>
      </div>
      <button className={styles.addToCartBtn}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
