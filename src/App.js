import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import aiml from "./pages/aiml"
import digitaltransformation from "./pages/digitaltransformation"
import modernization from "./pages/modernization"
import HNavbar from './components/HNavbar';

function App() {
  return (
    <>
     <div className="App">
        <Navbar />
        
        <div className="content">
          <Home />
          
        </div>
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/aiml' exact component={aiml} />
          <Route path='/digitaltransformation' component={digitaltransformation} />
          <Route path='/modernization' component={modernization} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
