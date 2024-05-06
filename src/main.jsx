import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import Row from './row';
import requests from './request';
import Banner from './banner';
import Nav from './navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='App'>
    <Nav />
    <Banner />
    <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
    <Row title="TRENDING" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
  </div>
)
