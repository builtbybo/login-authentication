import React from 'react';
import logo from './logo.svg';
import './App.css';
import Authenticate from './Authenticate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Authenticate />
      </header>
    </div>
  );
}

export default App;
