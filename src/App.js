/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ProfileCard from "./components/profileCard";
import InputField from "./components/inputField";

function App() {
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

  useEffect(() => {
    filterStudent();
  }, [searchText, searchTag]);

  const filterStudent = () => {
    const filteredStudent = data.filter((item) => {
      if (searchText && searchTag) {
        return (
          `${item.firstName} ${item.lastName}`.toLowerCase().includes(searchText) &&
          item?.tags?.toString().toLowerCase().includes(searchTag)
        );
      } else if (searchText) {
        return `${item.firstName} ${item.lastName}`.toLowerCase().includes(searchText);
      } else if (searchTag) {
        return item?.tags?.toString().toLowerCase().includes(searchTag);
      } else {
        return false;
      }
    });
    setFilterData(filteredStudent);
  };

  const handleSearchText = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const handleSearchTag = (e) => {
    const { value } = e.target;
    setSearchTag(value);
  };

  return (
    <div className="App">
      <div className="search-fields">
        <InputField value={searchText} onChange={handleSearchText} placeholder="Search by name" />
        <InputField value={searchTag} onChange={handleSearchTag} placeholder="Search by tag" />
      </div>
      {filterData.map((item) => {
        const avg = item.grades.reduce((prev, curr) => prev + +curr, 0) / item.grades.length;
        item["avg"] = avg;
        return <ProfileCard profile={item} key={item.id} />;
      })}
    </div>
  );
}

export default App;
