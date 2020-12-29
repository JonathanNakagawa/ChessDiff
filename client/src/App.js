import './App.css';
import {useState} from 'react';
import Games from './components/games.components';
import Search from './components/search.component';
import noAuthGamesQuery from './functions/games.functions';
import {formatGames} from './functions/data.functions';

function App() {
  const [games, updateGames] = useState([]);

  function performSearch(username) {
    noAuthGamesQuery(username)
      .then(res => formatGames(res))
      .then(ret => updateGames(ret));
  }

  return (
    <div className="App">
      <Search callback={performSearch}/>
      <Games gamesList={games}/>
    </div>
  );
}

export default App;
