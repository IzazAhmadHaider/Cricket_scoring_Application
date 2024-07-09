import React, { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Select } from "@mantine/core";
import { useSquadContext } from "../../AppContextProvider";
import { useNavigate } from "react-router-dom";

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
  const [istslot, setIstslot] = useState("");
  const [secondtslot, setSecondslot] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const selectData = Object.entries(squadteam1).map(([key, value]) => ({
    value: value,
    label: value,
  }));
  const navigate = useNavigate();
  useEffect(() => {
    console.log(selectData);
    if (selectData.length <= 0) {
      navigate("/squad");
    }
    // open();
  }, []);
  const matchstart = () => {
    close();
  };
  return (
    <div>
      <div className="p-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-md space-y-4">
  <div className="text-2xl font-bold text-blue-600">
    {`Match Between ${teamsNames.team1} VS ${teamsNames.team2}`}
  </div>
  <div className="text-lg text-purple-600">
    {`Team ${
      istbatting === "team1" ? teamsNames.team1 : teamsNames.team2
    } bats first`}
  </div>

  <div className="grid grid-cols-6 gap-4 font-semibold text-white bg-blue-500 p-2 rounded-lg">
    <span>Batsman</span>
    <span>Runs</span>
    <span>Balls</span>
    <span>4's</span>
    <span>6's</span>
    <span>Strike Rate</span>
  </div>

  <div className="grid grid-cols-6 gap-4 text-gray-700 bg-purple-100 p-2 rounded-lg">
    <span className="font-medium">Batsman</span>
    <span className="font-medium">Runs</span>
    <span className="font-medium">Balls</span>
    <span className="font-medium">4's</span>
    <span className="font-medium">6's</span>
    <span className="font-medium">Strike Rate</span>
  </div>

  <div className="grid grid-cols-6 gap-4 text-gray-700 bg-pink-100 p-2 rounded-lg">
    <span className="font-medium">Batsman</span>
    <span className="font-medium">Runs</span>
    <span className="font-medium">Balls</span>
    <span className="font-medium">4's</span>
    <span className="font-medium">6's</span>
    <span className="font-medium">Strike Rate</span>
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
          onChange={(label) => setIstslot(label)}
        />
        <Select
          label="Batsman 2 *(Non-Striker)"
          placeholder="Pick 2nd Batsman"
          data={selectData}
        />
        <Select
          label="Please select Bowler"
          placeholder="Pick Your Bowler"
          data={Object.entries(squadteam2).map(([key, value]) => ({
            value: key,
            label: value,
          }))}
        />
        <Button onClick={matchstart} className="mt-4 bg-indigo-600">
          Start the match
        </Button>
      </Modal>
    </div>
  );
};

export default MatchPage;
