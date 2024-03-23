import React, { useRef } from "react";

const Score = () => {
  const team1Ref = useRef(null);
  const team2Ref = useRef(null);

  const teamnameshandler = (e) => {
    e.preventDefault();
    localStorage.setItem("team1",team1Ref)
    localStorage.setItem("team2",team2Ref)
    console.log(team1Ref.current.value, team2Ref.current.value);
  };

  return (
    <>
      <p className="text-xl font-semibold">Team Information</p>

      <div>
        <p>Please Write Team Names:</p>

        <form onSubmit={teamnameshandler}>
          <div className="felx flex-col space-y-3">
            <div>
              {" "}
              <p>Team 1</p>
              <input
                className="w-[15rem] h-10 border-[3px] rounded-xl "
                type="text"
                ref={team1Ref}
              />
            </div>
            <div>
              {" "}
              <p>Team 2</p>
              <input
                className="w-[15rem] h-10 border-[3px] rounded-xl"
                type="text"
                ref={team2Ref}
              />
            </div>
          </div>
          <button
            className="w-fit h-10 bg-slate-400 rounded-md text-center mt-10"
            onClick={teamnameshandler}
          >
            Click To Submit Team Names
          </button>
        </form>
      </div>
    </>
  );
};

export default Score;
