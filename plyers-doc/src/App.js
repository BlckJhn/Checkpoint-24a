// src/App.js
import React from 'react';
import PlayersList from './components/Playerslist';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ padding: '20px'}}>
      <h1 style={{textAlign:'center',color:"Blue"}}>Player Documentation</h1>
      <PlayersList />
    </div>
  );
}

export default App;


