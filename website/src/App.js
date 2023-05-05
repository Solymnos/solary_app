import React, { useEffect, useState } from 'react';
import { getGames, getPlayers, getRankings, getResults, getUpcoming } from './api/apiHelper';

import './App.css';

function App() {

  const [ selectedGame , setSelectedGame ] = useState(0);
  const [ selectedView , setSelectedView ] = useState('players');
  const [ gamesData , setGamesData ] = useState(null);
  const [ contentData, setContentData ] = useState(null);

  useEffect(() => {
    async function init() {
      const result = await getGames();
      setGamesData(result);
    }

    init();
  }, []);


  useEffect(() => {
    async function updateData() {
    if (selectedView === 'players')
      {
        setContentData(await getPlayers(gamesData[selectedGame].link));
      }
      if (selectedView === 'results')
      {
        setContentData(await getResults(gamesData[selectedGame].link));
      }
      if (selectedView === 'upcoming')
      {
        setContentData(await getUpcoming(gamesData[selectedGame].link));
      }
      if (selectedView === 'rankings')
      {
        setContentData(await getRankings(gamesData[selectedGame].link));
      }
    }

    updateData();
  }, [selectedGame, selectedView, gamesData])

  const handleChangeGame = async (event) => {
    setSelectedGame(event.target.value);
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
              <option value={game.id}>{game.name}</option>
            )
          }
        </select>
        <div className='HeaderButton'>➕</div>
        <div className='HeaderButton'>🗑️</div>
      </div>
      <div className='ViewsChoice'>
          <div onClick={() => handleChangeView('players')} className={selectedView === 'players' ? "selectedView" : "View"}>Players</div>
          <div onClick={() => handleChangeView('results')} className={selectedView === 'results' ? "selectedView" : "View"}>Results</div>
          <div onClick={() => handleChangeView('upcoming')} className={selectedView === 'upcoming' ? "selectedView" : "View"}>Upcoming</div>
          <div onClick={() => handleChangeView('rankings')} className={selectedView === 'rankings' ? "selectedView" : "View"}>Rankings</div>
      </div>
      <div>
        {contentData}
      </div>
    </div>
  );
}

export default App;


// http://www.cril.univ-artois.fr/~boussemart/react/chapter02.html