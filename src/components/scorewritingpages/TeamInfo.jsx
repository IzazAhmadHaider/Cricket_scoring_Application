import React, { useState } from "react";

const Score = ({ getTotalPlayers }) => {
  const [teamsNames, setTeamNames] = useState({
    team1: "",
    team2: "",
    totalplayersperteam: "",
  });

  const teamnameshandler = (e) => {
    getTotalPlayers(e);
    const { name, value } = e.target;
    setTeamNames((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitteamsnames = (e) => {
    e.preventDefault();

    // Validate if totalplayersperteam is an integer
    const totalPlayers = parseInt(teamsNames.totalplayersperteam);
    if (isNaN(totalPlayers) || totalPlayers !== parseFloat(teamsNames.totalplayersperteam)) {
      console.log("Total Players per team must be an integer.");
      setTeamNames((prevState)=>({
        ...prevState,
        totalplayersperteam:"Please Enter Number"
      }))
      return;
    } 

    getTotalPlayers(teamsNames);
    console.log(teamsNames);
  };

  return (
    <>
      <div>
        <p className="text-xl font-semibold">Team Information</p>

        <div>
          <p>Please Write Team Names:</p>

          <form onSubmit={submitteamsnames}>
            <div className="flex flex-col space-y-3">
              <div>
                <p>Team 1</p>
                <input
                  className="w-[15rem] h-10 border-[3px] rounded-xl"
                  type="text"
                  name="team1"
                  value={teamsNames.team1}
                  onChange={teamnameshandler}
                />
              </div>
              <div>
                <p>Team 2</p>
                <input
                  className="w-[15rem] h-10 border-[3px] rounded-xl"
                  type="text"
                  name="team2"
                  value={teamsNames.team2}
                  onChange={teamnameshandler}
                />
              </div>
              <p>Total Players per team</p>
              <input
                className="w-[15rem] h-10 border-[3px] rounded-xl"
                type="text"
                name="totalplayersperteam"
                value={teamsNames.totalplayersperteam}
                onChange={teamnameshandler}
              />
            </div>
            <button
              type="submit"
              className="w-fit h-10 bg-slate-400 rounded-md text-center mt-10"
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
