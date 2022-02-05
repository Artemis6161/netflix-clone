import React from 'react'
import './App.css';
import Row from './Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
     <h1>hey programmers!</h1>
     <Row title="Trending Now" 
     fetchUrl={requests.fetchTrending}
     isLargeRow/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies}/>
     {/* <Row title="Documentaries" fetchUrl={requests.Documentaries}/>  */}
     
    </div>
  );
}

export default App;




