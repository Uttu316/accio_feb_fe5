import { Link } from "react-router";
import Header from "../../components/header";
import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFoundPage}>
      <Header title={"Oops"} />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* 404 Image/Illustration */}
          <div className={styles.imageSection}>
            <img
              src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=600&h=600&fit=crop"
              alt="Page not found"
            />
          </div>

          {/* Text Content */}
          <div className={styles.textSection}>
            <h1 className={styles.errorCode}>404</h1>
            <h2 className={styles.title}>Oops! Page Not Found</h2>
            <p className={styles.description}>
              The page you're looking for doesn't exist or has been moved. Don't
              worry, let's get you back on track!
            </p>

            {/* Call to Action Buttons */}
            <div className={styles.ctaButtons}>
              <Link replace={true} to="/" className={styles.primaryBtn}>
                Go to Home
              </Link>
              <Link replace={true} to="/store" className={styles.secondaryBtn}>
                Visit Store
              </Link>
            </div>

            {/* Additional Help */}
            <div className={styles.helpSection}>
              <p>Need help? Try these popular pages:</p>
              <div className={styles.quickLinks}>
                <span>Products</span>
                <span>About Us</span>
                <span>Contact</span>
                <span>FAQ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
