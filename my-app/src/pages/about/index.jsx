import Header from "../../components/header";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <Header title={"About us"} />
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>About ShopHub</h1>
        <p>
          Your trusted destination for quality products and exceptional shopping
          experience
        </p>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyContent}>
          <h2>Our Story</h2>
          <p>
            Founded in 2020, ShopHub began with a simple mission: to make online
            shopping accessible, affordable, and enjoyable for everyone. What
            started as a small startup has grown into a trusted ecommerce
            platform serving thousands of customers worldwide.
          </p>
          <p>
            We believe that shopping should be more than just a transaction.
            It's about discovering products you love, connecting with brands
            that share your values, and enjoying a seamless experience from
            browsing to delivery.
          </p>
          <p>
            Today, we partner with hundreds of trusted sellers and brands to
            bring you an extensive collection of products across multiple
            categories, all backed by our commitment to quality and customer
            satisfaction.
          </p>
        </div>
        <div className={styles.storyImage}>
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop"
            alt="Our team"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <h2>Our Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🎯</div>
            <h3>Customer First</h3>
            <p>
              Every decision we make starts with our customers. Your
              satisfaction and trust are our top priorities.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>✨</div>
            <h3>Quality Assured</h3>
            <p>
              We carefully curate our product selection to ensure you receive
              only the best quality items.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🌍</div>
            <h3>Sustainability</h3>
            <p>
              We're committed to reducing our environmental impact and promoting
              sustainable shopping practices.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🤝</div>
            <h3>Integrity</h3>
            <p>
              Transparency and honesty guide everything we do, from pricing to
              product descriptions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>50K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className={styles.statCard}>
            <h3>10K+</h3>
            <p>Products</p>
          </div>
          <div className={styles.statCard}>
            <h3>500+</h3>
            <p>Trusted Brands</p>
          </div>
          <div className={styles.statCard}>
            <h3>98%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop"
              alt="Team member"
            />
            <h3>John Anderson</h3>
            <p>CEO & Founder</p>
            <span>Leading our vision for the future of ecommerce</span>
          </div>
          <div className={styles.teamMember}>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop"
              alt="Team member"
            />
            <h3>Sarah Mitchell</h3>
            <p>Head of Operations</p>
            <span>Ensuring smooth operations and timely deliveries</span>
          </div>
          <div className={styles.teamMember}>
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop"
              alt="Team member"
            />
            <h3>Michael Chen</h3>
            <p>Chief Technology Officer</p>
            <span>Building innovative solutions for better shopping</span>
          </div>
          <div className={styles.teamMember}>
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop"
              alt="Team member"
            />
            <h3>Emily Rodriguez</h3>
            <p>Customer Success Manager</p>
            <span>Dedicated to your shopping experience</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
