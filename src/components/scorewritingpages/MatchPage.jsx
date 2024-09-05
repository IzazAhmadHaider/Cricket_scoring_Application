import React, { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Select, Text } from "@mantine/core";
import { useSquadContext } from "../../AppContextProvider";
import { useNavigate } from "react-router-dom";
import "../../styles/main.scss";

const MatchPage = () => {
  const {
    squadteam1,
    setSquadteam1,
    squadteam2,
    setSquadteam2,
    istbatting,
    setIstbatting,
    teamsNames,
  } = useSquadContext();

  const [total, setTotal] = useState({
    score: 0,
    overs: 0,
    balls: 0,
    average: 0.0,
    outs: 2,
  });
  const totalcalculator = (intValue) => {
    setTotal((prev) => {
      const updatedRuns =
        parseInt(prev.score) +
        (intValue === 1 ||
        intValue === 2 ||
        intValue === 3 ||
        intValue === 4 ||
        intValue === 6 ||
        intValue === 0
          ? intValue
          : 0);

      const updatedBalls =
        prev.balls == 6
          ? prev.balls == 0
          : intValue === 1 ||
            intValue === 2 ||
            intValue === 3 ||
            intValue === 4 ||
            intValue === 6 ||
            intValue === 0
          ? prev.balls + 1
          : prev.balls;

      const ballsaverage = prev.balls / 6;

      const updatedOvers = prev.balls == 6 ? prev.overs + 1 : prev.overs;

      const updatedAverage = prev.score / prev.overs + ballsaverage;

      return {
        ...prev,
        score: updatedRuns,
        balls: updatedBalls,
        overs: updatedOvers,
        average: updatedAverage,
      };
    });
  };

  const recordOut = () => {
    setTotal((prev) => {
      const updatedOuts = prev.outs + 1;
      const updatedAverage =
        updatedOuts > 0 ? (prev.score / updatedOuts).toFixed(2) : 0.0;

      return {
        ...prev,
        outs: updatedOuts,
        average: updatedAverage,
      };
    });
  };

  const [scorecardteam1, setScorecardteam1] = useState({
    player1: {
      name: "",
      runs: 0,
      balls: 0,
      fours: 0,
      sixs: 0,
      strikerate: 0,
    },
    player2: {
      name: "",
      runs: 0,
      balls: 0,
      fours: 0,
      sixs: 0,
      strikerate: 0,
    },
    Bowler: {
      name: "",
      runs: 0,
      overs: 0,
      balls: 0,
      Wickets: 0,
      extras: 0,
    },
  });

  useEffect(() => {}, []);

  const [opened, { open, close }] = useDisclosure(false);
  const [striker, setStriker] = useState("player 0");

  const selectData = Object.entries(
    istbatting === "team1" ? squadteam1 : squadteam2
  ).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const handleButtonClick = (value) => {
    totalcalculator(value);
    const intValue = parseInt(value);
    if (intValue >= 0) {
      const playerKey = striker === "Player 0" ? "player1" : "player2";

      setScorecardteam1((prev) => {
        const updatedBalls = parseInt(prev[playerKey].balls) + 1;
        const updatedRuns =
          parseInt(prev[playerKey].runs) +
          (intValue === 1 ||
          intValue === 2 ||
          intValue === 3 ||
          intValue === 4 ||
          intValue === 6
            ? intValue
            : 0);
        const updatedRunsBowler =
          parseInt(prev.Bowler.runs) +
          (intValue === 0 ||
          intValue === 1 ||
          intValue === 2 ||
          intValue === 3 ||
          intValue === 4 ||
          intValue === 6
            ? intValue
            : 1);
        const updatedballsBowler =
          prev.Bowler.balls < 6 ? prev.Bowler.balls + 1 : 0;
        const updatedoversBowler =
          prev.Bowler.balls > 5 ? prev.Bowler.overs + 1 : prev.Bowler.overs;

        const updatedPlayer = {
          ...prev[playerKey],
          balls: updatedBalls,
          runs: updatedRuns,
          strikerate: Math.round((updatedRuns / updatedBalls) * 100),
        };

        const updatedBowler = {
          ...prev.Bowler,
          runs: updatedRunsBowler,
          balls: updatedballsBowler,
          overs: updatedoversBowler
        };

        if (intValue === 4) {
          updatedPlayer.fours = parseInt(prev[playerKey].fours) + 1;
        }

        if (intValue === 6) {
          updatedPlayer.sixs = parseInt(prev[playerKey].sixs) + 1;
        }
        totalcalculator(intValue);

        return {
          ...prev,
          [playerKey]: updatedPlayer,
          Bowler: updatedBowler,
        };
      });

      if (intValue === 1 || intValue === 3) {
        setStriker(striker === "Player 0" ? "Player 1" : "Player 0");
      }
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (selectData.length <= 0) {
      navigate("/squad");
    }
    open();
  }, []);
  const matchstart = () => {
    close();
  };

  const Editplayersscores = (role, value) => {
    if (role === "batting") {
      setScorecardteam1((prev) => ({
        ...prev,
        [value.value === "Player 0" ? "player1" : "player2"]: {
          ...prev[value.value === "Player 0" ? "player1" : "player2"],
          name: value.label,
        },
      }));
    } else if (role === "bowler") {
      setScorecardteam1((prev) => ({
        ...prev,
        Bowler: {
          ...prev.Bowler,
          name: value.label,
        },
      }));
    }
  };
  return (
    <div>
      <div className="p-3 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-md space-y-2">
        <Text className="text-2xl font-bold text-blue-600 text-center">
          {`Match Between ${teamsNames.team1} VS ${teamsNames.team2}`}
        </Text>
        <div className="text-lg text-purple-600 text-center">
          <Text fw={700}>Cricket Scoreboard</Text>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {/* <!-- Score Information --> */}
            <div className="col-span-1 bg-gradient-to-r from-violet-200 to-pink-100 p-6 rounded-lg shadow-lg space-y-4">
              <div className="text-2xl font-bold text-gray-800 flex justify-between items-center">
                <span>Total:</span>
                <span className="text-blue-600">{total.score}</span>
              </div>
              <div className="text-2xl font-bold text-gray-800 flex justify-between items-center">
                <span>Overs:</span>
                <span className="text-blue-600">
                  {total.overs + " /" + total.balls}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-800 flex justify-between items-center">
                <span>Average:</span>
                <span className="text-blue-600">{total.average}</span>
              </div>
              <div className="text-2xl font-bold text-gray-800 flex justify-between items-center">
                <span>
                  {" "}
                  {`Team ${
                    istbatting === "team1" ? teamsNames.team1 : teamsNames.team2
                  } bats first`}
                </span>
              </div>
            </div>

            {/* <!-- Batsman Information --> */}
            <div className="space-y-2 col-span-2">
              <div className="grid grid-cols-6  font-semibold text-white bg-blue-500 p-1.5 rounded-lg">
                <span>Batsman</span>
                <span>Runs</span>
                <span>Balls</span>
                <span>4's</span>
                <span>6's</span>
                <span>Strike Rate</span>
              </div>
              <div className="grid grid-cols-6 gap-2 text-gray-700 bg-purple-100 p-2 rounded-lg">
                <span className="font-medium">
                  {scorecardteam1.player1.name || "Player 1"}
                </span>
                <span className="font-medium">
                  {scorecardteam1.player1.runs || "0"}
                </span>
                <span className="font-medium">
                  {scorecardteam1.player1.balls || "0"}
                </span>
                <span className="font-medium">
                  {scorecardteam1.player1.fours || "0"}
                </span>
                <span className="font-medium">
                  {scorecardteam1.player1.sixs || "0"}
                </span>
                <span className="font-medium">
                  {scorecardteam1.player1.strikerate || "0.00"}
                </span>
              </div>
              <div className="grid grid-cols-6 gap-2 text-gray-700 bg-pink-100 p-2 rounded-lg">
                <span className="font-medium">
                  {scorecardteam1.player2.name || "Player 2"}
                </span>
                <span className="font-medium">
                  {scorecardteam1.player2.runs || "0"}
                </span>
                <span className="font-medium">
                  {scorecardteam1.player2.balls || "0"}
                </span>
                <span className="font-medium">
                  {scorecardteam1.player2.fours || "0"}
                </span>
                <span className="font-medium">
                  {scorecardteam1.player2.sixs || "0"}
                </span>
                <span className="font-medium">
                  {scorecardteam1.player2.strikerate || "0.00"}
                </span>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-5 gap-2 font-semibold text-white bg-blue-500 p-2 rounded-lg">
                  <span>Bowler</span>
                  <span>Overs</span>
                  <span>Runs</span>
                  <span>Wickets</span>
                  <span>Extras</span>
                </div>
                <div className="grid grid-cols-5 gap-2 text-gray-700 bg-purple-100 p-2 rounded-lg">
                  <span className="font-medium">
                    {scorecardteam1.Bowler.name || "Player 1"}
                  </span>
                  <span className="font-medium">
                    {scorecardteam1.Bowler.overs +
                      "/" +
                      scorecardteam1.Bowler.balls || "0/0"}
                  </span>
                  <span className="font-medium">
                    {scorecardteam1.Bowler.runs || "0"}
                  </span>
                  <span className="font-medium">
                    {scorecardteam1.Bowler.Wickets || "0"}
                  </span>
                  <span className="font-medium">
                    {scorecardteam1.Bowler.extras || "0"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 bg-white rounded-lg shadow-lg space-y-2">
          <div className="grid grid-cols-4 gap-2">
            {[
              "0",
              "1",
              "2",
              "3",
              "4",
              "6",
              "Out",
              "Wide",
              "No Ball",
              "Bye",
              "Leg Bye",
              "over Throw",
              "Undo",
              "Redo",
              "Quit",
              "Switch Striker",
            ].map((item) => (
              <button
                key={item}
                onClick={() => handleButtonClick(item)}
                className={`p-2 text-white font-semibold rounded-lg transition-colors duration-500 ${
                  item === "Out"
                    ? "bg-red-500 hover:bg-red-600"
                    : item === "Wide"
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : item === "No Ball"
                    ? "bg-orange-500 hover:bg-orange-600"
                    : item === "Bye"
                    ? "bg-teal-500 hover:bg-teal-600"
                    : item === "Leg Bye"
                    ? "bg-green-500 hover:bg-green-600"
                    : item === "over Throw"
                    ? "bg-purple-500 hover:bg-purple-600"
                    : item === "Undo"
                    ? "bg-indigo-500 hover:bg-indigo-600"
                    : item === "Redo"
                    ? "bg-pink-500 hover:bg-pink-600"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        title="Please Select Players"
        centered
      >
        <Select
          label="Batsman 1 *(Striker)"
          placeholder="Pick Ist Batsman"
          data={selectData}
          onChange={(label, value) => Editplayersscores("batting", value)}
        />
        <Select
          label="Batsman 2 *(Non-Striker)"
          placeholder="Pick 2nd Batsman"
          data={selectData}
          onChange={(label, value) => Editplayersscores("batting", value)}
        />
        <Select
          label="Please select Bowler"
          placeholder="Pick Your Bowler"
          data={Object.entries(
            istbatting === "team1" ? squadteam2 : squadteam1
          ).map(([key, value]) => ({
            value: key,
            label: value,
          }))}
          onChange={(label, value) => Editplayersscores("bowler", value)}
        />
        <Button onClick={matchstart} className="mt-4 bg-indigo-600">
          Start the match
        </Button>
      </Modal>
    </div>
  );
};

export default MatchPage;
