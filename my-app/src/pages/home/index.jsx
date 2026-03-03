import { Link } from "react-router";
import Header from "../../components/header";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Header title={"ShopHub"} />
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to ShopHub</h1>
          <p className={styles.heroSubtitle}>
            Discover Amazing Products at Unbeatable Prices
          </p>
          <Link to="/store" className={styles.ctaButton}>
            Shop Now
          </Link>
        </div>
        <div className={styles.heroImage}>
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
            alt="Shopping experience"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🚚</div>
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🔒</div>
          <h3>Secure Payment</h3>
          <p>100% secure transactions</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>↩️</div>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>💬</div>
          <h3>24/7 Support</h3>
          <p>Dedicated customer service</p>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categoriesSection}>
        <h2 className={styles.sectionTitle}>Shop by Category</h2>
        <div className={styles.categoriesGrid}>
          <div className={styles.categoryCard}>
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
              alt="Electronics"
            />
            <h3>Electronics</h3>
          </div>
          <div className={styles.categoryCard}>
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop"
              alt="Fashion"
            />
            <h3>Fashion</h3>
          </div>
          <div className={styles.categoryCard}>
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=400&fit=crop"
              alt="Home & Living"
            />
            <h3>Home & Living</h3>
          </div>
          <div className={styles.categoryCard}>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
              alt="Accessories"
            />
            <h3>Accessories</h3>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className={styles.promoBanner}>
        <div className={styles.promoContent}>
          <h2>Summer Sale</h2>
          <p>Up to 50% off on selected items</p>
          <button className={styles.promoButton}>View Deals</button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for exclusive offers and updates</p>
        <div className={styles.newsletterForm}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.emailInput}
          />
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
