import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
