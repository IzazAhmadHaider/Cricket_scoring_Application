import { useState, useEffect } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SquadInfo from "./components/scorewritingpages/SquadInfo";
import Score from "./components/scorewritingpages/TeamInfo";
import MatchPage from "./components/scorewritingpages/MatchPage";
import LoginComponent from "./components/Login";
import Signup from "./components/Signup";
import AIThreat from "./components/AI";

function App() {
  const [teamsNames, setTeamNames] = useState({
    team1: "",
    team2: "",
    totalplayersperteam: "",
  });
  const getTotalPlayers = (teaminfo) => {
    setTeamNames(teaminfo);
  };

  // useEffect(() => {
  //   const handleBeforeUnload = (e) => {
  //     const confirmationMessage = "Are you sure you want to leave? Your data will be lost.";
  //     e.preventDefault();
  //     e.returnValue = confirmationMessage;
  //     return confirmationMessage;
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Score getTotalPlayers={getTotalPlayers} />,
    },
    {
      path: "/squad",
      element: <SquadInfo teamplayersinfo={teamsNames} />,
    },
    {
      path: "/matchpage",
      element: <MatchPage />,
    },
    {
      path: "/login",
      element: <LoginComponent />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },{
      path: "/ai",
      element: <AIThreat/>
    }
  ]);
  return (
    <>
      <div className=" font-SairaSemiCondensed">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
