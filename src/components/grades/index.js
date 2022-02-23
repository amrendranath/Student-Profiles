import "./grades.css";

const Grades = ({ grades }) => {
  return (
    <ul className="grades-list">
      {grades.map((grade, index) => (
        <li key={index}>
          {`Test ${index + 1}:`}
          <span>{grade + "%"}</span>
        </li>
      ))}
    </ul>
  );
};

export default Grades;
