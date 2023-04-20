import React, { useEffect } from 'react';

import './App.css';
import Search from './Search/Search';
import Board from './Board/Board';
import { getIssues } from '../services/api';

function App() {

  useEffect(() => {
    getIssues('facebook', 'react').then(console.log)
  }, [])
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
