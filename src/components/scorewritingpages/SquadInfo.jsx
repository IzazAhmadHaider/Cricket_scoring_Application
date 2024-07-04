import React from "react";

function SquadInfo({ teamplayersinfo }) {
  return (
    <>
    {teamplayersinfo.totalplayersperteam > 0 &&<div className="flex flex-col space-y-3">
      <h1>Please Enter Your Squads</h1>
      <div className="flex space-x-10">
        <div>
          <h1>{`Team ${teamplayersinfo.team1}`}</h1>
          {Array.from(
            { length: Number(teamplayersinfo.totalplayersperteam) },
            (_, i) => i + 1
          ).map((player, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <input
                className="w-[15rem] h-10 mb-2 border-[3px] rounded-xl"
                type="text"
                name={`Player ${index}`}
                placeholder={`Player ${index + 1}`}
                id={index}
              />
            </div>
          ))}
        </div>

        <div>
          <h1>{`Team ${teamplayersinfo.team2}`}</h1>
          {Array.from(
            { length: Number(teamplayersinfo.totalplayersperteam) },
            (_, i) => i + 1
          ).map((player, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <input
                className="w-[15rem] h-10 mb-2 border-[3px] rounded-xl"
                type="text"
                name={`Player ${index}`}
                placeholder={`Player ${index + 1}`}
                id={index}
              />
            </div>
          ))}
        </div>
      </div>
      </div>}
    </>
  );
}

export default SquadInfo;
