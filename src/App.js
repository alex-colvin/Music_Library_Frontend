import './App.css';
import NavBar from './Components/NavBar/NavBar';
import MusicTable from './Components/MusicTable/MusicTable';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music');
    setSongs(response.data);
  }
 
  async function filterSongs(category, filterData) {
    let response = await axios.get(`http://127.0.0.1:8000/api/music?${category}=${filterData}`);
    setSongs(response.data);
    
  }


  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <SearchBar filterSongs={filterSongs} songs={songs} />
      </div>
      <div>
        <MusicTable songs={songs} />
      </div>
    </div>
  );
}

export default App;
