import React, { Suspense, useContext } from 'react';

import AccountProvider from './context/AccountProvider';
import UserInterface from './pages/UserInterface';
import './App.css';


function App() {

  return (
    <AccountProvider>
      <UserInterface />
    </AccountProvider>
  );
}

export default App;
