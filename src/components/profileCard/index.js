import React from "react";
import "./profileCard.css";

const ProfileCard = ({ profile }) => {
  const { pic, firstName, lastName, email, company, skill, avg, grades } = profile;
  const [isExpand, setIsExpand] = React.useState(false);

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
                <li>
                  {`Test ${index + 1}:`}
                  <span>{grade + "%"}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
