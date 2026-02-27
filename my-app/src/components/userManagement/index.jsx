import { useState } from "react";
import UserForm from "./userForm";
import UserList from "./userList";
import styles from "./userManagement.module.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [editIndex, setEditIndex] = useState(-1);

  const onAdd = (user) => {
    setUsers((prev) => [...prev, user]);
  };
  const onEdit = (user, index) => {
    setEditIndex(index);
    setName(user.name);
    setEmail(user.email);
    setMessage(user.message);
  };

  const onDelete = (userId) => {
    setUsers((curr) => curr.filter((i) => i.id !== userId));
  };
  const onUpdate = () => {
    //update user on same position
    setUsers((curr) => {
      curr[editIndex] = {
        ...curr[editIndex],
        name,
        email,
        message,
      };
      return curr;
    });
    //reset the form
    setEditIndex(-1);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Management</h1>
      <UserForm
        setEmail={setEmail}
        setName={setName}
        setMessage={setMessage}
        name={name}
        email={email}
        message={message}
        onAdd={onAdd}
        editIndex={editIndex}
        onUpdate={onUpdate}
      />
      <UserList
        editIndex={editIndex}
        users={users}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};
export default UserManagement;
