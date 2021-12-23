import React, {useState} from 'react'
import './styles/App.css';
import SearchBar from "./components/SearchBar";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/HttpTrigger`)).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;
