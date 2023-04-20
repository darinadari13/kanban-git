import React from 'react';

import './App.css';
import Search from './Search/Search';
import Board from './Board/Board';

function App() {
  return (
    <div className="container">
      <div className="App">
        <Search/>
        <Board/>
      </div>
    </div>
  );
}

export default App;
