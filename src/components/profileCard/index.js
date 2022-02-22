import React from "react";
import "./profileCard.css";

const ProfileCard = ({ profile }) => {
  const { pic, firstName, lastName, email, company, skill, avg } = profile;
  return (
    <div className="profile-card">
      <img src={pic} alt="" />
      <div className="card-info">
        <h1 className="card-title">{firstName + " " + lastName}</h1>
        <div className="card-content">
          <p>Email: {email}</p>
          <p>Company: {company}</p>
          <p>Skill: {skill}</p>
          <p>Average: {avg + "%"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
