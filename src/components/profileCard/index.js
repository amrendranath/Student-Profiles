import React from "react";
import InputField from "../inputField";
import Tags from "../Tags";
import "./profileCard.css";

const ProfileCard = ({ profile }) => {
  const { pic, firstName, lastName, email, company, skill, avg, grades, tags = [] } = profile;
  const [isExpand, setIsExpand] = React.useState(false);
  const [tag, setTag] = React.useState("");

  const handleTags = (e) => {
    const { value } = e.target;
    setTag(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (tags.length === 0) {
        profile["tags"] = [tag];
      } else {
        tags.push(tag);
      }
      setTag("");
    }
  };

  return (
    <>
      <div className="profile-card">
        <div>
          <img src={pic} alt="" />
        </div>
        <div className="card-info">
          <div className="card-header">
            <h1 className="card-title">{firstName + " " + lastName}</h1>
            <button className="expand-button" onClick={() => setIsExpand((prevValue) => !prevValue)}>
              {isExpand ? "-" : "+"}
            </button>
          </div>
          <div className="card-content">
            <p>Email: {email}</p>
            <p>Company: {company}</p>
            <p>Skill: {skill}</p>
            <p>Average: {avg + "%"}</p>
          </div>
          {isExpand && (
            <ul>
              {grades.map((grade, index) => (
                <li key={index}>
                  {`Test ${index + 1}:`}
                  <span>{grade + "%"}</span>
                </li>
              ))}
            </ul>
          )}
          {tags.length > 0 && <Tags tags={tags} />}
          <div className="card-tag">
            <InputField placeholder="Add a tag" value={tag} onChange={handleTags} onKeyDown={handleKeyDown} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
