import { useState ,useEffect } from 'react'
import './App.css'
import SquadInfo from './components/scorewritingpages/SquadInfo'
import Score from './components/scorewritingpages/TeamInfo'

function App() {
  const [teamsNames, setTeamNames] = useState({
    team1: "",
    team2: "",
    totalplayersperteam: "",
  });
  const getTotalPlayers=(teaminfo) =>{
    setTeamNames(teaminfo);
  }


  useEffect(() => {
    const handleBeforeUnload = (e) => {
      const confirmationMessage = "Are you sure you want to leave? Your data will be lost.";
      e.preventDefault();
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <>
    <div className='flex space-x-10'>
    <Score getTotalPlayers={getTotalPlayers}/>
    <SquadInfo teamplayersinfo={teamsNames}/>
    </div>
    
    </>
  )
}

export default App
