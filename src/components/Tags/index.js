import "./tags.css";

const Tags = ({ tags }) => {
  return (
    <ul className="tag-list">
      {tags.map((tag, index) => (
        <li key={tag + index}>{tag}</li>
      ))}
    </ul>
  );
};

export default Tags;
