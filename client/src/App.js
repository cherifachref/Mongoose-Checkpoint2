import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'

import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Add from './Pages/Add';
import Errors from './Pages/Errors';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>MERN App</h1>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/add" element={<Add/>} />
        {/*<Route path="/*" element={<Errors/>} />*/}
      </Routes>
    </div>
  );
}

export default App;
