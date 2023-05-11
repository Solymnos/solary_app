import React, { useEffect, useState } from 'react';
import { getGames, getPlayers, getRankings, getResults, getUpcoming } from './api/apiHelper';
import CreateTeamModal from './components/CreateTeamModal';
import UpdateTeamModal from './components/UpdateTeamModal';
import DeleteTeamModal from './components/DeleteTeamModal';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlayersContent from './components/PlayersContent';
import ResultsContent from './components/ResultsContent';
import UpcomingContent from './components/UpcomingContent';
import RankingsContent from './components/RankingsContent';

function App() {

  const [ selectedGame , setSelectedGame ] = useState(null);
  const [ selectedGamePos , setSelectedGamePos ] = useState(0);
  const [ selectedView , setSelectedView ] = useState('players');
  const [ gamesData , setGamesData ] = useState(null);
  const [ contentData, setContentData ] = useState(null);

  const [ openModal, setOpenModal ] = useState(false);

  useEffect(() => {
    async function init() {
      const result = await getGames();
      console.log(result);
      setGamesData(result);
    }

    init();
  }, []);


  useEffect(() => {
    async function updateGames() {
      const result = await getGames();
      setGamesData(result);
    }

    updateGames();
  }, [openModal]);

  const afterGameSuppr = async (open) =>
  {
    setOpenModal(open);
    setSelectedGamePos(0);
  }

  useEffect(() => {
    async function updateData() {
    if (selectedView === 'players')
      {
        setContentData(await getPlayers(gamesData[selectedGamePos].link));
      }
      if (selectedView === 'results')
      {
        setContentData(await getResults(gamesData[selectedGamePos].link));
      }
      if (selectedView === 'upcoming')
      {
        setContentData(await getUpcoming(gamesData[selectedGamePos].link));
      }
      if (selectedView === 'rankings')
      {
        setContentData(await getRankings(gamesData[selectedGamePos].link));
      }
    }

    updateData();

  }, [selectedGame, selectedView, gamesData, selectedGamePos]);

  const handleChangeGame = async (event) => {
    setSelectedGame(event.target.value);
    setSelectedGamePos(gamesData.findIndex(obj => obj._id === event.target.value));
  }

  const handleChangeView = async (view) => {
    setSelectedView(view);
  }

  if (!gamesData)
  {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div className='App'>
      <div className='Header'>
        <select id = "selectGame" value={selectedGame} onChange={handleChangeGame}>
          {
            gamesData.map((game) => 
              <option value={game._id}>{game.name}</option>
            )
          }
        </select>
        <div onClick={() => {console.log(selectedGame);setOpenModal('updateTeamModal')}} className='HeaderButton'>✏️</div>
        <div onClick={() => {setOpenModal('createTeamModal')}} className='HeaderButton'>➕</div>
        <div onClick={() => {setOpenModal('deleteTeamModal')}} className='HeaderButton'>🗑️</div>
      </div>
      <div className='ViewsChoice'>
          <div onClick={() => handleChangeView('players')} className={selectedView === 'players' ? "SelectedView" : "View"}>Players</div>
          <div onClick={() => handleChangeView('results')} className={selectedView === 'results' ? "SelectedView" : "View"}>Results</div>
          <div onClick={() => handleChangeView('upcoming')} className={selectedView === 'upcoming' ? "SelectedView" : "View"}>Upcoming</div>
          <div onClick={() => handleChangeView('rankings')} className={selectedView === 'rankings' ? "SelectedView" : "View"}>Rankings</div>
      </div>
      <div>
        {selectedView === 'players' && <PlayersContent data={contentData}/>}
        {selectedView === 'results' && <ResultsContent data={contentData}/>}
        {selectedView === 'upcoming' && <UpcomingContent data={contentData}/>}
        {selectedView === 'rankings' && <RankingsContent data={contentData}/>}
      </div>
      <ToastContainer position="top-center" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      {openModal === 'createTeamModal' && <CreateTeamModal closeModal={setOpenModal} toastOnMain={toast}/>}
      {openModal === 'updateTeamModal' && <UpdateTeamModal _id={gamesData[selectedGamePos]._id} _name={gamesData[selectedGamePos].name} _link={gamesData[selectedGamePos].link} _icon={gamesData[selectedGamePos].icon} closeModal={setOpenModal} toastOnMain={toast}/>}    
      {openModal === 'deleteTeamModal' && <DeleteTeamModal _id={gamesData[selectedGamePos]._id} _name={gamesData[selectedGamePos].name} closeModal={afterGameSuppr} toastOnMain={toast}/>}
    </div>
  );
}

export default App;