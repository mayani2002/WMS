import React, { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css';



// Pages
const Login = React.lazy(() => import('./pages/citizen/Login.jsx'))
const Register = React.lazy(() => import('./pages/citizen/Register.jsx'))
const Landing = React.lazy(() => import('./pages/landing/Landing.jsx'))
const Admin = React.lazy(() => import('./pages/admin/Admin.jsx'))
const Citizen = React.lazy(() => import('./pages/citizen/Citizen.jsx'))
const Driver = React.lazy(() => import('./pages/driver/Driver.jsx'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))



function App() {
  return (
    <HashRouter>
      <Suspense >
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route path="*" name="Landing Page" element={<Landing />} />
          <Route exact path="/admin" name="Admin Dashboard Page" element={<Admin />} />
          <Route exact path="/citizen" name="Citizen Dashboard Page" element={<Citizen />} />
          <Route exact path="/driver" name="Driver Dashboard Page" element={<Driver />} />
          {/* <Route exact path="/404" name="Page 404" element={<Page404 />} /> */}
          {/* <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
