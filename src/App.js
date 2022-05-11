import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout'
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  return (
    <>
     
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='Login' element={<Login/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
