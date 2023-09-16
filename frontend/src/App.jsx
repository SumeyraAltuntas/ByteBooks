import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';

// Pages
import Backend from './pages/Backend/Backend'
import Cybersecurity from './pages/Cybersecurity/Cybersecurity'
import Frontend from './pages/Frontend/Frontend'

import NavBar from './components/NavBar/NavBar'

function App() {
  const [books, useBooks] = useState([])

  return (
    <div className="App">
      <NavBar />

      <Routes>
      <Route path="/backend" 
        element={
          <Backend /> 
        }
      />
      <Route path="/cybersecurity" 
        element={
          <Cybersecurity /> 
        }
      />
      <Route path="/frontend" 
        element={
          <Frontend /> 
        }
      />

        <Route path="/backend" />
        <Route path="/cybersecurity" />
        <Route path="/frontend" />
      </Routes>
    </div>
  );
}

export default App;
