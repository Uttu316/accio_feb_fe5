import { useState } from "react";

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
    <div>
      <form onSubmit={onSubmit}>
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
        <button onClick={onSubmit}>Submit</button>
      </form>
      {user !== null && (
        <div>
          <p> Name:{user.name}</p>
          <p> Email:{user.email}</p>
          <p> Phone:{user.phone}</p>
          <p> Message:{user.message}</p>
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
    <div className="input_box">
      <label htmlFor={name}>{label}</label>
      {!isText && (
        <input
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
