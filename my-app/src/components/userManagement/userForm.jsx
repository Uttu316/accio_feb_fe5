import { useState } from "react";
import styles from "./userForm.module.css";

const UserForm = ({
  onAdd,
  setEmail,
  setMessage,
  setName,
  name,
  email,
  message,
  editIndex,
  onUpdate,
}) => {
  const [error, seterror] = useState("");

  const isEditmode = editIndex !== -1;

  const onSubmit = (e) => {
    e.preventDefault();

    if (name.length > 3 && email.includes("@") && message.length > 6) {
      const user = {
        name,
        email,
        message,
        id: Date.now(),
      };
      onAdd(user); //send to save in list
      seterror(""); //reset the form
      setEmail("");
      setName("");
      setMessage("");
    } else {
      seterror("Please enter valid name, email and message (>6 chars)");
    }
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <InputBox
        label={"Name"}
        onInput={(e) => setName(e.target.value)}
        placeholder={"Enter your name"}
        name={"name"}
        value={name}
      />
      <InputBox
        label={"Email"}
        placeholder={"Enter your email"}
        type={"email"}
        name={"email"}
        value={email}
        onInput={(e) => setEmail(e.target.value)}
      />

      <div className={styles.input_full}>
        <InputBox
          isText={true}
          label={"Message"}
          placeholder={"Write your message..."}
          name={"message"}
          value={message}
          onInput={(e) => setMessage(e.target.value)}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      {!isEditmode && (
        <button className={styles.submit_btn} onClick={onSubmit}>
          Save User
        </button>
      )}
      {isEditmode && (
        <button className={styles.submit_btn} onClick={onUpdate}>
          Update User
        </button>
      )}
    </form>
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

export default UserForm;
