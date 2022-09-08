import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getCategories } from './services/api';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>Edit src/App.js and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
          console.log(getCategories())
        }
      </header>
    </div>
  );
}

export default App;
