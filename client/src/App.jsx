import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Auth from './pages/Auth';
import './App.css';

function App() {
  return (
    <>
      
      <Routes>
        <Route index Component={Home} />
        <Route path="/auth" Component={Auth} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;