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
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <p className="text-2xl font-semibold text-gray-700 mb-6">Team Information</p>

        <div>
          <p className="text-lg font-medium text-gray-600 mb-4">Please Write Team Names:</p>

          <form onSubmit={submitteamsnames} className="space-y-6">
            <div className="flex flex-col space-y-4">
              <div>
                <p className="text-base font-medium text-gray-600 mb-2">Team 1</p>
                <input
                  className="w-[15rem] h-10 border-2 border-blue-400 rounded-lg p-2"
                  type="text"
                  name="team1"
                  value={teamsNames.team1}
                  onChange={teamnameshandler}
                  placeholder="Enter Team 1 Name"
                />
              </div>
              <div>
                <p className="text-base font-medium text-gray-600 mb-2">Team 2</p>
                <input
                  className="w-[15rem] h-10 border-2 border-green-400 rounded-lg p-2"
                  type="text"
                  name="team2"
                  value={teamsNames.team2}
                  onChange={teamnameshandler}
                  placeholder="Enter Team 2 Name"
                />
              </div>
              <div>
                <p className="text-base font-medium text-gray-600 mb-2">Total Players per Team</p>
                <input
                  className="w-[15rem] h-10 border-2 border-purple-400 rounded-lg p-2"
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
              className="w-fit h-10 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 px-4 rounded transition-all duration-200"
            >
              Click To Submit Team Names
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Score;
