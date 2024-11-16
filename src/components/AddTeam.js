import React, { useState } from "react";
import API from "../api";
import "./AddTeam.css"; // Import the CSS file for styling

const AddTeam = ({ refreshTeams }) => {
  const [team, setTeam] = useState({
    team: "",
    gamesPlayed: "",
    win: "",
    draw: "",
    loss: "",
    goalsFor: "",
    goalsAgainst: "",
    points: "",
  });

  const handleChange = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/add", team);
      alert("Team added successfully!");
      refreshTeams();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="add-team-container">
      <form className="add-team-form" onSubmit={handleSubmit}>
        <h3>Add New Team</h3>
        {/* Form Inputs */}
        {Object.keys(team).map((key) => (
          <div className="input-container" key={key}>
            <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
            <input
              id={key}
              name={key}
              placeholder={key}
              value={team[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="submit-button">Add Team</button>
      </form>
    </div>
  );
};

export default AddTeam;
