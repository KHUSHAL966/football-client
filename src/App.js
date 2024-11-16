import React, { useState } from "react";
import AddTeam from "./components/AddTeam";
import TeamList from "./components/TeamList";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const refreshTeams = () => setRefresh((prev) => !prev);

  return (
    <div>
      <h1 >Football Team Manager</h1>
      <AddTeam refreshTeams={refreshTeams} />
      <TeamList refresh={refresh} />
    </div>
  );
};

export default App;
