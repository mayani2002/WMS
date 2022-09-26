import React from 'react';

// import Tabs
const Landing = React.lazy(() => import('./pages/landing/Landing.jsx'));
const Login = React.lazy(() => import('./pages/landing/Login.jsx'));
const Register = React.lazy(() => import('./pages/landing/Register.jsx'));

const routes = [
    { path: '/login', exact: true, name: 'Login Page', element: Login },
    { path: '/register', name: 'Register Page', element: Register },
    { path: '/landing', name: 'Landing', element: Landing },
    // { path: '/Faq', name: 'Faq', element: Faq },
];

export default routes;