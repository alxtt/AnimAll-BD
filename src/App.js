import React, {useState} from 'react'
import './styles/App.css';
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import PostItem from "./components/PostItem";

function App() {

  return (
    <div className="App">
        <PostItem/>
        <PostItem/>
        <PostItem/>
    </div>
  );
}

export default App;
