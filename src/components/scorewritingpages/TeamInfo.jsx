import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSquadContext } from "../../AppContextProvider";

const Score = ({ getTotalPlayers }) => {
 const{teamsNames , setTeamNames}=useSquadContext()

  const teamnameshandler = (e) => {
    const { name, value } = e.target;
    setTeamNames((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const submitteamsnames = (e) => {
    e.preventDefault();

    // Validate if totalplayersperteam is an integer
    const totalPlayers = parseInt(teamsNames.totalplayersperteam);
    if (isNaN(totalPlayers) || totalPlayers !== parseFloat(teamsNames.totalplayersperteam)) {
      setTeamNames((prevState) => ({
        ...prevState,
        totalplayersperteam: "Please Enter a Number",
      }));
      return;
    }

    getTotalPlayers(teamsNames);
    navigate("/squad")
  };

  return (
    <>
<div className="p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-2xl transform transition-transform hover:scale-95 duration-500 hover:rotate-1 hover:shadow-pink-500">
  <p className="text-4xl font-extrabold text-white mb-8 text-center animate-pulse">Team Information</p>

  <div className="bg-white p-6 rounded-lg shadow-inner transform hover:scale-95 transition-transform duration-500">
    <p className="text-xl font-medium text-gray-700 mb-6">Please Write Team Names:</p>

    <form onSubmit={submitteamsnames} className="space-y-10">
      <div className="flex flex-col space-y-6">
        <div className="relative group">
          <p className="text-base font-semibold text-gray-800 mb-2">Team 1</p>
          <input
            className="w-full max-w-xs h-12 border-2 border-blue-400 rounded-lg p-3 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 group-hover:ring-4 group-hover:ring-blue-400"
            type="text"
            name="team1"
            value={teamsNames.team1}
            onChange={teamnameshandler}
            placeholder="Enter Team 1 Name"
          />
        </div>
        <div className="relative group">
          <p className="text-base font-semibold text-gray-800 mb-2">Team 2</p>
          <input
            className="w-full max-w-xs h-12 border-2 border-green-400 rounded-lg p-3 shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 group-hover:ring-4 group-hover:ring-green-400"
            type="text"
            name="team2"
            value={teamsNames.team2}
            onChange={teamnameshandler}
            placeholder="Enter Team 2 Name"
          />
        </div>
        <div className="relative group">
          <p className="text-base font-semibold text-gray-800 mb-2">Total Players per Team</p>
          <input
            className="w-full max-w-xs h-12 border-2 border-purple-400 rounded-lg p-3 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 group-hover:ring-4 group-hover:ring-purple-400"
            type="text"
            name="totalplayersperteam"
            value={teamsNames.totalplayersperteam}
            onChange={teamnameshandler}
            placeholder="Enter Total Players"
          />
        </div>
      </div>
      <button
        type="submit"
        className="relative w-fit h-12 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 px-8 rounded-full shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 transition-opacity duration-500 hover:opacity-100 rounded-full blur"></span>
        <span className="relative z-10">Submit Team Names</span>
      </button>
    </form>
  </div>
</div>

    </>
  );
};

export default Score;
