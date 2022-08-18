import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImagesBox from './ImagesBox';
import ImagesProvider from './ImagesProvider';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <div><h1>nagłówek1</h1></div>
        <img src={logo} width="250" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ImagesBox></ImagesBox>
        <ImagesProvider></ImagesProvider>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
