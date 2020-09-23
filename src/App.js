import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'

import NavBar from './components/NavBar'
import Routes from './components/Routes'

import Home from './pages/Home'
import About from './pages/About'

function App() {

  const pages = [
    {
        path: '/',
        title: 'Home',
        pageComponent: Home
    },
    {
        path: '/about',
        title: 'About',
        pageComponent: About
    }
  ]

  return (
    <Router>
      <div className="App">
        <NavBar pages={pages} />
        <Routes pages={pages} />
        
      </div>
    </Router>
  );
}

export default App;
