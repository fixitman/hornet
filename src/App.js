import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout'
import Home from './pages/Home';
import Login from './pages/Login';

import RequireAuth from './components/RequireAuth';
import UserLists from './pages/UserLists';
import ListContents from './pages/ListContents';
import { useStoreActions } from 'easy-peasy';


function App() {

  const subscribeToAuthChanges = useStoreActions(actions => actions.auth.subscribeToAuthChanges);

  useEffect(() => {
    return subscribeToAuthChanges()
  }, [subscribeToAuthChanges])

  return (
    <>

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

    </>
  );
}

export default App;
