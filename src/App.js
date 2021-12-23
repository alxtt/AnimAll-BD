import React, {useState} from 'react'
import './styles/App.css';
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
        <form>
                <Navbar/>
                <Main/>
                <SearchBar/>
        </form>
    </div>
  );
}

export default App;
