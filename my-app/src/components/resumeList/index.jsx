import styles from "./resumeList.module.css";

const ResumeList = ({ title, list }) => {
  return (
    <div className={styles.resume_container}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export const ListItem = ({ item }) => {
  return (
    <li className={styles.list_item}>
      <p className={styles.item_label}>{item.label}</p>
    </li>
  );
};

export default ResumeList;
