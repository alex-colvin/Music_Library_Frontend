import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <MusicTable />
      </div>
    </div>
  );
}

export default App;
