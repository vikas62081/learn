import React from 'react';
import './App.css';
import Header from './common/components/layout/Header'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
    </div>
    </BrowserRouter>
  ); 
}

export default App;
