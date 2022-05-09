import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [songs, setSongs] = useState([{title: "Delete Dog",artist: "Elvis Presley",album: "Single",releaseDate: "1956-07-13",genre: "Rock and Roll",likes: "5"},{title: "Delete Dog",artist: "Elvis Presley",album: "Single",releaseDate: "1956-07-13",genre: "Rock and Roll",likes: "5"}]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music')
    setSongs(response.data);
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <SearchBar getAllSongs={getAllSongs} />
      </div>
      <div>
        <MusicTable songs={songs} />
      </div>
    </div>
  );
}

export default App;
