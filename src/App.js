import React from 'react';
import './App.css';


import Routes from './routes'

function App() {
  return (
    <>
    <div  className="nav"></div>
    <div className="container">
       
      <div className="content">
        <Routes/>
      </div>
    </div>
    </>
  );
}

export default App;
