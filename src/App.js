import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import QAImage from './assets/image.jpg';

function App() {
  // let name = "Hlaing Min Than";

  let [name, setName] = useState("Hlaing Min Than");

  let changeName = () => {
    // name = "Aung Aung";
    setName("Aung Aung");
    console.log(name);
  }

  return (
    <div className='app'>
      <h1>Hello {name}</h1>
      <button onClick={changeName}>change name</button>
    </div>
  );
}

export default App;
