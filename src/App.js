import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'

import NavBar from './components/NavBar'
import Routes from './components/Routes'

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Contacts from './pages/Contacts'
import Related from './pages/Related'

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
    },
    {
      path: '/login',
      title: 'Login',
      pageComponent: Login
    },
    {
      path: '/contacts',
      title: 'Contacts',
      pageComponent: Contacts
    },
    {
      path: '/related',
      title: 'Related',
      pageComponent: Related
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
