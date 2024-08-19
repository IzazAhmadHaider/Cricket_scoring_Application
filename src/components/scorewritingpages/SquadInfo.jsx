import React, { useEffect, useState } from "react";
import { useSquadContext } from "../../AppContextProvider";

import { useNavigate } from "react-router-dom";

function SquadInfo({ teamplayersinfo = 1 }) {
  const {
    squadteam1,
    setSquadteam1,
    squadteam2,
    setSquadteam2,
    istbatting,
    setIstbatting,
  } = useSquadContext();
  const [toss, setToss] = useState("");

  const playersnames = Array.from(
    { length: Number(teamplayersinfo.totalplayersperteam) },
    (_, i) => i + 1
  );

  const playersnameschanged = (e) => {
    const { name, value } = e.target;
    setSquadteam1((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };
  const navigate = useNavigate();

  const playersnameschangedteam2 = (e) => {
    const { name, value } = e.target;
    setSquadteam2((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };
  useEffect(() => {
    if (teamplayersinfo.totalplayersperteam <= 0) {
      navigate("/");
    }
  }, [teamplayersinfo, navigate]);

  const matchstart=()=>{
    navigate("/matchpage");
  }


  return (
    <>
      {teamplayersinfo.totalplayersperteam > 0 && (
        <div className="flex flex-col space-y-6 p-6 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-700">
            Please Enter Your Squads
          </h1>
          <div className="flex space-x-10">
            <div>
              <h1 className="text-xl font-semibold text-blue-600">{`Team ${teamplayersinfo.team1}`}</h1>
              {playersnames.map((player, index) => (
                <div key={index} className="flex flex-col space-y-3">
                  <input
                    className="w-[15rem] h-10 mb-2 border-2 border-blue-400 rounded-lg p-2"
                    type="text"
                    name={`Player ${index}`}
                    placeholder={`Player ${index + 1}`}
                    id={index}
                    onChange={playersnameschanged}
                  />
                </div>
              ))}
            </div>

            <div>
              <h1 className="text-xl font-semibold text-green-600">{`Team ${teamplayersinfo.team2}`}</h1>
              {playersnames.map((player, index) => (
                <div key={index} className="flex flex-col space-y-3">
                  <input
                    className="w-[15rem] h-10 mb-2 border-2 border-green-400 rounded-lg p-2"
                    type="text"
                    name={`Player ${index}`}
                    placeholder={`Player ${index + 1}`}
                    id={index}
                    onChange={playersnameschangedteam2}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            {toss.length <= 0 ? (
              <div>
                <p className="text-lg font-semibold">Toss:</p>
                <div className="flex space-x-5">
                  <button
                    onClick={() => setToss("team1")}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    {teamplayersinfo.team1 || "Team 1"}
                  </button>
                  <button
                    onClick={() => setToss("team2")}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                  >
                    {teamplayersinfo.team2 || "Team 2"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-4 flex space-x-3">
                <button
                  onClick={() =>{ setIstbatting(toss) , matchstart()}}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Batting
                </button>
                <button
                  onClick={() => {
                    setIstbatting(toss == "team1" ? "team2" : "team1"), matchstart();
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                  Bowling
                </button>
              </div>
            )}
          </div>
        </div>
      )}
     
    </>
  );
}

export default SquadInfo;
