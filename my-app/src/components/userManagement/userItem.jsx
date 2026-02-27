import { MdEdit as EditIcon, MdDelete as DeleteIcon } from "react-icons/md";
import styles from "./userList.module.css";

const UserItem = ({ editIndex, user, onEdit, onDelete, index }) => {
  return (
    <div className={styles.item_card}>
      <div className={styles.item_content}>
        <h3 className={styles.item_name}>{user.name}</h3>
        <p className={styles.item_email}>{user.email}</p>
        <p className={styles.item_message}>{user.message}</p>
      </div>
      <div className={styles.item_actions}>
        <button
          className={`${styles.btn} ${styles.btn_edit}`}
          disabled={editIndex !== -1}
          onClick={() => onEdit(user, index)}
          title="Edit"
        >
          <EditIcon />
        </button>
        <button
          className={`${styles.btn} ${styles.btn_delete}`}
          disabled={editIndex !== -1}
          onClick={() => onDelete(user.id)}
          title="Delete"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
export default UserItem;
