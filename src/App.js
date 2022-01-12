import React from 'react'
import './App.css';
import Row from './Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
     <h1>hey programmers!</h1>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
 
    </div>
  );
}

export default App;




