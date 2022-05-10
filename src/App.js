import './App.css';
import MusicTable from './Components/MusicTable/MusicTable';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import PostSong from './Components/PostSong/PostSong';
import bootstrap from 'bootstrap';

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
  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
    if(response.status ===201){
    await getAllSongs();
    }
  }
  async function deleteSong(key){
    await axios.delete(`http://127.0.0.1:8000/api/music/${key}`);
    await getAllSongs();
  }
  async function likeSong(key){
    await axios.patch(`http://127.0.0.1:8000/api/music/${key}/like/`);
    await getAllSongs();
  }
  async function editSong(key, body){
    await axios.put(`http://127.0.0.1:8000/api/music/${key}/`);

  }

  return (
    <div className='bg-secondary'>
      <div className='p-4 text-center bg-dark text-light'>
        <h1 className='mb-3'>Music Library</h1>
      </div>
      <div className='bg-secondary'>
        <h2 className='text-center pt-2'>Filter Songs</h2>
        <SearchBar filterSongs={filterSongs} songs={songs} />
      </div>
      <div className='bg-secondary'>
        <MusicTable songs={songs} deleteSong={deleteSong} likeSong={likeSong}/>
      </div>
      <div className='bg-secondary'>
        <h2 className='text-center pt-2'>Add a Song</h2>
        <PostSong createSong={createSong} />
      </div>
    </div>
  );
}

export default App;
