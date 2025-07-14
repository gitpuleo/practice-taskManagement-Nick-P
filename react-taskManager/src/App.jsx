import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import TaskList from './Components/TaskList';
import TaskDetails from './Components/TaskDetail';

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
     </Router>
    </>
  );
}

export default App


//To revisit: 
//Is the path for Tasklist really correct? Is this best practice? 
//Does not function without downloading react-router-dom package; something I've done wrong that this is rewquired?
