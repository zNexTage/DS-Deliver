import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/index';
import Home from './Pages/Home/index'

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
