import { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import Navbar from './Components/Navbar';


function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="App">
      <Navbar
        searchValue={searchValue}
        setSearchValue={setSearchValue} />
      <MovieList
        searchValue={searchValue}
        setSearchValue={setSearchValue} />
    </div>
  );
}

export default App;
