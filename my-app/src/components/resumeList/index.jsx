import "./resumeList.css";
const ResumeList = ({ title, list }) => {
  return (
    <div className="resume_list">
      <h2>{title}</h2>
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export const ListItem = ({ item }) => {
  return (
    <li>
      <p>{item.label}</p>
    </li>
  );
};

export default ResumeList;
