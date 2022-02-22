import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((response) => response.json())
      .then((data) => setData(data.students))
      .catch((err) => console.log(err));
  }, []);

  console.log("data >>", data);

  return (
    <div className="App">
      {data.map((item) => {
        const avg = item.grades.reduce((prev, curr) => prev + +curr, 0) / item.grades.length;
        return (
          <div key={item.id}>
            <img src={item.pic} alt="" />
            <h2>{item.firstName + " " + item.lastName}</h2>
            <p>
              <span>Email: </span>
              {item.email}
            </p>
            <p>
              <span>Company: </span>
              {item.company}
            </p>
            <p>
              <span>Skill: </span>
              {item.skill}
            </p>
            <p>
              <span>Average: </span>
              {avg + "%"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
