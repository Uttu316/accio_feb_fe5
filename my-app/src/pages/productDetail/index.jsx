import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShoppingCart,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";
import Header from "../../components/header";
import styles from "./productDetail.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { API } from "../../services";

const ProductDetail = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");

  const getProduct = async () => {
    try {
      const data = await API({
        endpoint: "/products/" + productId,
      });
      setProduct(data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const isLoading = status === "loading";
  const isErorr = status === "error";
  const isDone = status === "done";
  const hasProduct = isDone && product !== null;
  const noProduct = isDone && product === null;

  return (
    <div className={styles.productDetailPage}>
      <Header title={"Product"} />

      {isLoading && <h2>Loading your product..</h2>}

      {isErorr && <h2>Something Went Wrong</h2>}

      {noProduct && <h2>Product not avaialable</h2>}

      {hasProduct && (
        <div className={styles.container}>
          {/* Breadcrumb */}

          {/* Product Detail Section */}
          <div className={styles.productDetail}>
            {/* Left Side - Product Image */}
            <div className={styles.imageSection}>
              <div className={styles.mainImage}>
                <img src={product.image} alt={product.title} />
              </div>
            </div>

            {/* Right Side - Product Content */}
            <div className={styles.contentSection}>
              {/* Title */}
              <h1 className={styles.productTitle}>{product.title}</h1>

              {/* Category */}
              <div className={styles.category}>
                <span>Category:</span> {product.category}
              </div>

              {/* Rating and Reviews */}
              <div className={styles.ratingSection}>
                <div className={styles.stars}>
                  <FaStar className={styles.starFilled} />
                  <FaStar className={styles.starFilled} />
                  <FaStar className={styles.starFilled} />
                  <FaStar className={styles.starFilled} />
                  <FaStarHalfAlt className={styles.starFilled} />
                </div>
                <span className={styles.ratingText}>{product.rating.rate}</span>
                <span className={styles.reviewCount}>
                  ({product.rating.count} Reviews)
                </span>
              </div>

              {/* Price */}
              <div className={styles.priceSection}>
                <span className={styles.currentPrice}>${product.price}</span>
              </div>

              {/* Description */}
              <div className={styles.description}>
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>

              {/* Color Options */}

              {/* Action Buttons */}
              <div className={styles.actionButtons}>
                <button className={styles.addToCartBtn}>
                  <FaShoppingCart /> Add to Cart
                </button>
                <button className={styles.wishlistBtn}>
                  <FaHeart />
                </button>
                <button className={styles.shareBtn}>
                  <FaShareAlt />
                </button>
              </div>

              {/* Additional Info */}
              <div className={styles.additionalInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>✓</span>
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>↩</span>
                  <span>30-day return policy</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>🔒</span>
                  <span>Secure payment guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className={styles.productTabs}>
            <div className={styles.tabHeaders}>
              <button className={styles.tabHeader}>Specifications</button>
              <button className={styles.tabHeader}>Reviews</button>
              <button className={styles.tabHeader}>Shipping Info</button>
            </div>
            <div className={styles.tabContent}>
              <div className={styles.specifications}>
                <table>
                  <tbody>
                    <tr>
                      <td>Brand</td>
                      <td>AudioPro</td>
                    </tr>
                    <tr>
                      <td>Model</td>
                      <td>AP-X500</td>
                    </tr>
                    <tr>
                      <td>Connectivity</td>
                      <td>Bluetooth 5.0, 3.5mm Jack</td>
                    </tr>
                    <tr>
                      <td>Battery Life</td>
                      <td>30 hours</td>
                    </tr>
                    <tr>
                      <td>Charging Time</td>
                      <td>2 hours</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>250g</td>
                    </tr>
                    <tr>
                      <td>Warranty</td>
                      <td>2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className={styles.relatedProducts}>
            <h2>Related Products</h2>
            <div className={styles.relatedGrid}>
              <div className={styles.relatedCard}>
                <img
                  src="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop"
                  alt="Related product"
                />
                <h4>Wireless Earbuds Pro</h4>
                <p>$89.99</p>
              </div>
              <div className={styles.relatedCard}>
                <img
                  src="https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop"
                  alt="Related product"
                />
                <h4>Studio Monitor Headphones</h4>
                <p>$179.99</p>
              </div>
              <div className={styles.relatedCard}>
                <img
                  src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&h=300&fit=crop"
                  alt="Related product"
                />
                <h4>Gaming Headset RGB</h4>
                <p>$129.99</p>
              </div>
              <div className={styles.relatedCard}>
                <img
                  src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=300&h=300&fit=crop"
                  alt="Related product"
                />
                <h4>Sport Wireless Earphones</h4>
                <p>$59.99</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
