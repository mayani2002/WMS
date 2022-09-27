import React from 'react';

// Pages
const Landing = React.lazy(() => import('./pages/landing/Landing.jsx'));
const Login = React.lazy(() => import('./pages/landing/Login.jsx'));
const Register = React.lazy(() => import('./pages/landing/Register.jsx'));
const AboutUs = React.lazy(() => import('./components/AboutUsSection.jsx'));
const Contact = React.lazy(() => import('./components/ContactSection.jsx'));


const routes = [
    { path: '/contact', exact: true, name: 'Contact', element: Contact },
    { path: '/aboutUs', exact: true, name: 'About Us', element: AboutUs },
    { path: '/login', exact: true, name: 'Login Page', element: Login },
    { path: '/register', name: 'Register Page', element: Register },
    { path: '/landing', name: 'Landing', element: Landing },
];

// export const dashboardroutes = [
//     { path: '/home', exact: true, name: 'Home', element: Home },
//     { path: '/newPickUp', exact: true, name: 'New Pick Up', element: NewPickUp },
//     { path: '/allPickUps', exact: true, name: 'All Pick Ups', element: AllPickUps },
// ]

export default routes;