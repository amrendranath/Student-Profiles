import { useEffect, useState } from "react";
import ProfileCard from "./components/profileCard";
import InputField from "./components/inputField";

function App() {
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTag, setSearchTag] = useState("");

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((response) => response.json())
      .then((data) => {
        setData(data.students);
        setFilterData(data.students);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("data >>", data);

  const handleSearchText = (e) => {
    const { value } = e.target;
    setSearchText(value);
    setFilterData(data.filter((item) => `${item.firstName} ${item.lastName}`.toLowerCase().includes(value)));
  };

  const handleSearchTag = (e) => {
    const { value } = e.target;
    setSearchTag(value);
    setFilterData(data.filter((item) => `${item.tags}`.toString().toLowerCase().includes(value)));
  };

  return (
    <div className="App">
      <InputField value={searchText} onChange={handleSearchText} placeholder="Search by name" />
      <InputField value={searchTag} onChange={handleSearchTag} placeholder="Search by tag" />
      {filterData.map((item) => {
        const avg = item.grades.reduce((prev, curr) => prev + +curr, 0) / item.grades.length;
        item["avg"] = avg;
        return <ProfileCard profile={item} key={item.id} />;
      })}
    </div>
  );
}

export default App;
