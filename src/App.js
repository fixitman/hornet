import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout'
import Home from './pages/Home';
import Login from './pages/Login';
import AuthContextProvider from './contexts/AuthContext';
import RequireAuth from './components/RequireAuth';
import UserLists from './pages/UserLists';
import ListContents from './pages/ListContents';


function App() {

  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='UserLists' element={
              <RequireAuth>
                <UserLists />
              </RequireAuth>
            } />
            <Route path='List/:id' element={
              <RequireAuth>
                <ListContents />
              </RequireAuth>
            } />
          </Route>
          
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
