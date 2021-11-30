import React from 'react';
import logo from './logo.svg';
import './App.css';
import HW1 from "./p2-homeworks/h1/HW1";
import HW2 from "./p2-homeworks/h2/HW2";
import HW3 from "./p2-homeworks/h3/HW3";
import HW4 from "./p2-homeworks/h4/HW4";

function App() {
  return (
    <div className="App">
      <HW1/>
        <HW2/>
        <HW3/>
      <HW4/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
