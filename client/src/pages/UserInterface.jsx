import React, { Suspense, useContext } from "react";
import { AccountContext } from '../context/AccountProvider';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Cookies from 'universal-cookie';

// Pages
const User = React.lazy(() => import('./landing/User.jsx'))
const Admin = React.lazy(() => import('./admin/Admin.jsx'))
const Citizen = React.lazy(() => import('./citizen/Citizen.jsx'))
const Driver = React.lazy(() => import('./driver/Driver.jsx'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const cookies = new Cookies();

const UserInterface = () => {
    const { account, setaccount } = useContext(AccountContext);

    return (
        <HashRouter>
            <Suspense >
                <Routes>
                    <Route path="*" name="user" element={cookies.get('email') ? <Citizen /> : <User />} />
                    <Route exact path="/admin" name="Admin Dashboard Page" element={<Admin />} />
                    <Route exact path="/driver" name="Driver Dashboard Page" element={<Driver />} />
                    {/* <Route exact path="/404" name="Page 404" element={<Page404 />} /> */}
                    {/* <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
                </Routes>
            </Suspense>
        </HashRouter>
    )

}

export default UserInterface;