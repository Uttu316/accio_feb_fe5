import Header from "../../components/header";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <Header title={"Contact us"} />
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Our team is here to help!</p>
      </section>

      {/* Contact Content */}
      <section className={styles.contactContent}>
        {/* Contact Form */}
        <div className={styles.formSection}>
          <h2>Send us a Message</h2>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" required>
                <option value="">Select a subject</option>
                <option value="order">Order Inquiry</option>
                <option value="product">Product Question</option>
                <option value="return">Returns & Refunds</option>
                <option value="technical">Technical Support</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help you..."
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className={styles.infoSection}>
          <div>
            <h2>Contact Information</h2>
            <p>
              Have questions? We're here to help! Reach out through any of these
              channels and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📍</div>
            <div className={styles.infoDetails}>
              <h3>Visit Us</h3>
              <p>
                123 Commerce Street
                <br />
                San Francisco, CA 94102
                <br />
                United States
              </p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📧</div>
            <div className={styles.infoDetails}>
              <h3>Email Us</h3>
              <p>
                General: <a href="mailto:info@shophub.com">info@shophub.com</a>
                <br />
                Support:{" "}
                <a href="mailto:support@shophub.com">support@shophub.com</a>
                <br />
                Sales: <a href="mailto:sales@shophub.com">sales@shophub.com</a>
              </p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📞</div>
            <div className={styles.infoDetails}>
              <h3>Call Us</h3>
              <p>
                Customer Service:{" "}
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
                <br />
                Sales: <a href="tel:+15551234568">+1 (555) 123-4568</a>
                <br />
                Mon-Fri: 9:00 AM - 6:00 PM PST
              </p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>💬</div>
            <div className={styles.infoDetails}>
              <h3>Live Chat</h3>
              <p>
                Chat with our support team in real-time.
                <br />
                Available 24/7 for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqCard}>
            <h3>What are your shipping options?</h3>
            <p>
              We offer standard (5-7 days), express (2-3 days), and overnight
              shipping. Free shipping on orders over $50.
            </p>
          </div>
          <div className={styles.faqCard}>
            <h3>What is your return policy?</h3>
            <p>
              We accept returns within 30 days of purchase. Items must be unused
              and in original packaging with tags attached.
            </p>
          </div>
          <div className={styles.faqCard}>
            <h3>How can I track my order?</h3>
            <p>
              Once shipped, you'll receive a tracking number via email. You can
              also track orders in your account dashboard.
            </p>
          </div>
          <div className={styles.faqCard}>
            <h3>Do you ship internationally?</h3>
            <p>
              Yes! We ship to over 50 countries worldwide. International
              shipping rates and times vary by location.
            </p>
          </div>
          <div className={styles.faqCard}>
            <h3>What payment methods do you accept?</h3>
            <p>
              We accept all major credit cards, PayPal, Apple Pay, Google Pay,
              and Shop Pay for your convenience.
            </p>
          </div>
          <div className={styles.faqCard}>
            <h3>How do I cancel or modify my order?</h3>
            <p>
              Contact us within 2 hours of placing your order. Once shipped,
              orders cannot be modified but can be returned.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <h2>Find Our Store</h2>
        <div className={styles.mapPlaceholder}>🗺️ Map Location</div>
      </section>
    </div>
  );
};

export default Contact;
