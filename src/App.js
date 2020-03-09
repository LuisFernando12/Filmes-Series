import React from 'react';
import './App.css';
import Routes from './routes'

function App() {
    function Filmes(){
      window.location = '/filmes'
    }
    function Series(){
      window.location = '/series'
    }
  return (
    <div className="Main">
    <header>
        Bem Vindo ao Mundo dos Filmes e Series
    </header>
      <div id="box_options">
       <div className="movies_series" onClick={()=>{Filmes()}}>Filmes</div>
       <div className="movies_series" onClick={()=>{Series()}}>Series</div>
      </div>
      <Routes />
    </div>
  );
}

export default App;
