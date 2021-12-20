import React, {useState} from 'react'
import Counter from "./components/Counter";
import './styles/App.css';
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import CustomInput from "./components/UI/Input/CustomInput";
import CustomButton from "./components/UI/Button/CustomButton";

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
