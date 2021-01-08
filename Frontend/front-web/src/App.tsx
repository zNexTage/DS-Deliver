import React from 'react';
import './App.css';
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App(): JSX.Element {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
