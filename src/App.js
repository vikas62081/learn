import React from 'react';
import './App.css';
import Header from './common/components/layout/Header'
import {BrowserRouter} from 'react-router-dom'
import SimpleCard from './common/components/post';
import CourseContainer from './common/containers/courseContainer';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <SimpleCard/>
     <CourseContainer/>
    </div>
    </BrowserRouter>
  ); 
}

export default App;
