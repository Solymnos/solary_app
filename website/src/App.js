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
import CreatePlayerModal from './components/CreatePlayerModal';
import DeletePlayerModal from './components/DeletePlayerModal';
import UpdatePlayerModal from './components/UpdatePlayerModal';
import CreateResultModal from './components/CreateResultModal';

function App() {

  const [ selectedGame , setSelectedGame ] = useState(null);
  const [ selectedGamePos , setSelectedGamePos ] = useState(0);
  const [ selectedView , setSelectedView ] = useState('players');
  const [ gamesData , setGamesData ] = useState(null);
  const [ contentData, setContentData ] = useState([]);

  const [ openModal, setOpenModal ] = useState('');
  const [ modalData, setModalData ] = useState({});

  useEffect(() => {
    async function init() {
      const result = await getGames();
      console.log(result);
      setGamesData(result);
      if (selectedView === 'players')
      {
        let { itWork, response } = await getPlayers((result[selectedGamePos]._id));
        if (itWork === true)
        {
          setContentData(response);
        } else {
          toast.error(response, { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
        }
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
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    async function update() {
      console.log('BUG')
      const games = await getGames();
      setGamesData(games);

      if (selectedView === 'players')
      {
        let { itWork , response } = await getPlayers(gamesData[selectedGamePos]._id);
        if (itWork === true)
        {
          setContentData(response);
        } else {
          toast.error(response, { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
        }
      } else if (selectedView === 'results')
      {
        let { itWork , response } = await getResults(gamesData[selectedGamePos]._id);
        if (itWork === true)
        {
          setContentData(response);
        } else {
          toast.error(response, { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
        }
      } else if (selectedView === 'results')
      {
        let { itWork , response } = await getUpcoming(gamesData[selectedGamePos]._id);
        if (itWork === true)
        {
          setContentData(response);
        } else {
          toast.error(response, { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
        }
      } else if (selectedView === 'upcoming')
      {
        let { itWork , response } = await getRankings(gamesData[selectedGamePos]._id);
        if (itWork === true)
        {
          setContentData(response);
        } else {
          toast.error(response, { position : "top-center", autoClose : 2500, hideProgressBar : false, closeOnClick : true, pauseOnHover : true, draggable : true, progress : undefined, theme : "dark"});
        }
      }
    }

    update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGame, selectedView, openModal]);

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
      <div className='flex flex-grow w-full'>
        {selectedView === 'players' && <PlayersContent data={contentData} setOpenModal={setOpenModal} setModalData={setModalData}/>}
        {selectedView === 'results' && <ResultsContent data={contentData} setOpenModal={setOpenModal} setModalData={setModalData}/>}
      </div>
      <ToastContainer position="top-center" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      {openModal === 'createTeamModal' && <CreateTeamModal closeModal={setOpenModal} toastOnMain={toast}/>}
      {openModal === 'updateTeamModal' && <UpdateTeamModal _id={gamesData[selectedGamePos]._id} _name={gamesData[selectedGamePos].name} _link={gamesData[selectedGamePos].link} _icon={gamesData[selectedGamePos].icon} closeModal={setOpenModal} toastOnMain={toast}/>}    
      {openModal === 'deleteTeamModal' && <DeleteTeamModal _id={gamesData[selectedGamePos]._id} _name={gamesData[selectedGamePos].name} closeModal={afterGameSuppr} toastOnMain={toast}/>}
      {openModal === 'createPlayerModal' && <CreatePlayerModal closeModal={setOpenModal} toastOnMain={toast} gameId={gamesData[selectedGamePos]._id} type={modalData.type}/>}
      {openModal === 'deletePlayerModal' && <DeletePlayerModal closeModal={setOpenModal} toastOnMain={toast} playerId={modalData.playerId} gameId={gamesData[selectedGamePos]._id} playerName={modalData.playerName}/>}
      {openModal === 'updatePlayerModal' && <UpdatePlayerModal teamId={gamesData[selectedGamePos]._id} playerId={modalData.playerId} playerName={modalData.playerName} playerRole={modalData.playerRole} playerIcon={modalData.playerIcon} playerType={modalData.playerType} closeModal={setOpenModal} toastOnMain={toast}/>}
      {openModal === 'createResultModal' && <CreateResultModal closeModal={setOpenModal} toastOnMain={toast} gameId={gamesData[selectedGamePos]._id} />}
    </div>
  );
}

//{selectedView === 'results' && <ResultsContent data={contentData}/>}
//{selectedView === 'upcoming' && <UpcomingContent data={contentData}/>}
//{selectedView === 'rankings' && <RankingsContent data={contentData}/>}
export default App;