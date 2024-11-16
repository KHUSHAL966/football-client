import React, { useEffect, useState } from "react";
import API from "../api";
import "./TeamList.css"; // Import the CSS for styling

const TeamList = ({ refresh }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await API.get("/all");
      setTeams(response.data);
    };
    fetchTeams();
  }, [refresh]);

  const handleDelete = async (id) => {
    await API.delete(`/delete/${id}`);
    alert("Team deleted!");
    setTeams((prev) => prev.filter((team) => team._id !== id));
  };

  return (
    <div className="team-list-container">
      <h3 className="team-list-heading">Team List</h3>
      <ul className="team-list">
        {teams.map((team) => (
          <li className="team-item" key={team._id}>
            <div className="team-info">
              <strong>{team.team}</strong>
            </div>
            <button
              className="delete-button"
              onClick={() => handleDelete(team._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
