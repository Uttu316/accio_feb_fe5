import UserItem from "./userItem";
import styles from "./userList.module.css";

const UserList = ({ users, editIndex, onEdit, onDelete }) => {
  const isEmpty = users.length === 0;

  return (
    <div className={styles.list_container}>
      {isEmpty && <p className={styles.empty_msg}>No Message available</p>}
      {!isEmpty &&
        users.map((item, index) => (
          <UserItem
            key={item.id}
            user={item}
            onEdit={onEdit}
            index={index}
            editIndex={editIndex}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};

export default UserList;
