import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [ selectedGame , setSelectedGame ] = useState('');
  const [ selectedView, setSelectedView ] = useState(''); 
  // View : Players + 

  const handleChangeGame = (event) => {
    setSelectedGame(event.target.value);
  }

  return (
    <div className='App'>
      <div className='Header'>
        <select id = "selectGame" value={selectedGame} onChange={handleChangeGame}>
          <option value="League of Legends">League of Legends</option>
          <option value="TFT">TeamFightTactics</option>
          <option value="Valornt">Valorant</option>
        </select>
      </div>
      <div className='ViewsChoice'>
        <div className='View'>
          Players
        </div>
        <div className='View'>
          Results
        </div>
        <div className='View'>
          Upcoming
        </div>
        <div className='View'>
          Ranking
        </div>
      </div>
    </div>
  );
}

export default App;
