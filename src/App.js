import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Tic Tac Toe </h1>
        <Board />

      </header>
    </div>
  );
}

function Board() {
  return (
    <div className="tictactoe">
      <button type="button"> A </button>
      <button type="button"> B </button>
      <button type="button"> C </button>
      <button type="button"> D </button>
      <button type="button"> E </button>
      <button type="button"> F </button>
      <button type="button"> G </button>
      <button type="button"> H </button>
      <button type="button"> I </button>
    </div>
  );
}

export default App;
