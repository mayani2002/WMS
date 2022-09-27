import React, { Suspense, useContext } from 'react';

import AccountProvider from './context/AccountProvider';
import { AccountContext } from './context/AccountProvider';
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css';


// Pages
const User = React.lazy(() => import('./pages/landing/User.jsx'))
const Admin = React.lazy(() => import('./pages/admin/Admin.jsx'))
const Citizen = React.lazy(() => import('./pages/citizen/Citizen.jsx'))
const Driver = React.lazy(() => import('./pages/driver/Driver.jsx'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))



function App() {
  const { account } = useContext(AccountContext);
  
  return (
    <AccountProvider>
    <HashRouter>
      <Suspense >
        <Routes>
            <Route path="*" name="user" element={account ? <User /> : <User />} />
          {/* <Route exact path="/citizen" name="Citizen Dashboard Page" element={} /> */}
          <Route exact path="/admin" name="Admin Dashboard Page" element={<Admin />} />
          <Route exact path="/driver" name="Driver Dashboard Page" element={<Driver />} />
          {/* <Route exact path="/404" name="Page 404" element={<Page404 />} /> */}
          {/* <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
        </Routes>
      </Suspense>
      </HashRouter>
    </AccountProvider>
  );
}

export default App;
