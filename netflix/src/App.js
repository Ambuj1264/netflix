import React from "react";
import Row from "./Row";
import requests from "./Request";
import "./App.css";
import Banner from './Banner'
import Nav from './Nav'
const App = () => {
  return (
    <>
      <div className="App">
        {/* navbar */}
        {/* banner */}
        <Nav />
        <Banner />
        <Row
          title="NETFLIX ORIGNALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Mpvies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Ramance Movies " fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </>
  );
};

export default App;
