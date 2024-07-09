import React, { createContext, useContext, useState } from "react";

// Create a context for squad teams
const SquadContext = createContext();

// Custom hook to use the SquadContext
export const useSquadContext = () => useContext(SquadContext);

// Provider component to wrap your application
export const SquadProvider = ({ children }) => {
  const [squadteam1, setSquadteam1] = useState([]);
  const [squadteam2, setSquadteam2] = useState([]);
  const [istbatting, setIstbatting] = useState("");
  const [teamsNames, setTeamNames] = useState({
    team1: "",
    team2: "",
    totalplayersperteam: "",
  });

  const value = {
    squadteam1,
    teamsNames,
    setTeamNames,
    setSquadteam1,
    squadteam2,
    setSquadteam2,
    istbatting,
    setIstbatting
  };

  return (
    <SquadContext.Provider value={value}>{children}</SquadContext.Provider>
  );
};
