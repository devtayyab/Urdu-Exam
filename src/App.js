import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screen/home';
import { Biography } from './screen/biography';
import PoetList from './screen/poetlist';

function App() {
  return (
    <div  style={{
      maxWidth: '100%'
  }}>
    <PoetList></PoetList>
    {/* <Biography/> */}
     {/* <Home></Home> */}
    </div>
  );
}

export default App;
