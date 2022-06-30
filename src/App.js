import React from 'react'

import logo from './logo.svg'
import Board from './game/Board'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>The Finance Game</h3>
      </header>
      <div className="content">
        <Board />
      </div>
    </div>
  );
}

export default App;
