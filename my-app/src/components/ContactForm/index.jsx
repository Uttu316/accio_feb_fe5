import { useState } from "react";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [user, setUser] = useState(null);

  const onInput = (e) => {
    const { value, id } = e.target;

    //copy current data, store value correspond to id
    setData({ ...data, [id]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setUser(data); //store values for user
    setData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div className={styles.contact_container}>
      <h2 style={{ marginBottom: "1.5rem", color: "#111827", fontSize: "1.5rem" }}>
        Contact Us
      </h2>
      <form className={styles.contact_form} onSubmit={onSubmit}>
        <InputBox
          value={data.name}
          label={"Name"}
          placeholder={"Enter your name"}
          name="name"
          onInput={onInput}
        />

        <InputBox
          value={data.email}
          name="email"
          type="email"
          placeholder="Enter your email"
          label={"Email"}
          onInput={onInput}
        />

        <InputBox
          value={data.phone}
          name="phone"
          type="tel"
          placeholder="Your phone number"
          label={"Phone"}
          onInput={onInput}
        />

        <InputBox
          id="message"
          name="message"
          value={data.message}
          placeholder="Enter your message here..."
          label={"Message"}
          isText={true}
          onInput={onInput}
        />
        <button className={styles.submit_btn} onClick={onSubmit}>
          Submit Message
        </button>
      </form>
      {user !== null && (
        <div className={styles.user_info}>
          <h3>Message Sent Successfully!</h3>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Message:</strong> {user.message}
          </p>
        </div>
      )}
    </div>
  );
};

const InputBox = ({
  label,
  type,
  value,
  name,
  placeholder,
  isText,
  onInput,
}) => {
  return (
    <div className={styles.input_group}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {!isText && (
        <input
          className={styles.input}
          type={type}
          value={value}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onInput}
        />
      )}
      {isText && (
        <textarea
          className={styles.textarea}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onInput}
        ></textarea>
      )}
    </div>
  );
};

export default ContactForm;
