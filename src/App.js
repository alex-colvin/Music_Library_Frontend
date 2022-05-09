import './App.css';
import NavBar from './Components/NavBar/NavBar';
import MusicTable from './Components/MusicTable/MusicTable';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [songs, setSongs] = useState([{title: "Delete Dog",artist: "Elvis Presley",album: "Single",release_date: "1956-07-13",genre: "Rock and Roll",likes: "5"},{title: "Delete Dog",artist: "Elvis Presley",album: "Single",releaseDate: "1956-07-13",genre: "Rock and Roll",likes: "5"}]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music')
    console.log(response.data);
    setSongs(response.data);
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <MusicTable songs={songs} getAllSongs={getAllSongs} />
      </div>
    </div>
  );
}

export default App;
