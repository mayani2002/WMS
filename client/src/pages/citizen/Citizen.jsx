import { Box, Paper, SvgIcon } from '@mui/material';
import React, { Suspense, useContext } from "react";
import { HashRouter, Route, Routes } from 'react-router-dom'

import { dashboardroutes } from '../../routes';

import AccountNavBar from '../../components/AccountNavBar';
import { ReactComponent as bgIcon } from '../../asset/Bg2.svg';



// Pages
const Home = React.lazy(() => import('../../tabs/Home.jsx'))
const NewPickUp = React.lazy(() => import('../../tabs/NewPickUp.jsx'))
const AllPickUps = React.lazy(() => import('../../tabs/AllPickUps.jsx'))

const Citizen = () => {
    return (
        <Box sx={{ m: "0", heigth: "100vh" }}>

            {/* Background  */}
            <SvgIcon sx={{
                zIndex: "-2", top: "-10vh", position: "fixed", opacity: "0.7", display: "flex", overflow: "visible", objectFit: "contain", width: "35vw", height: "100vh"
            }} component={bgIcon} viewBox="0 200 500 500" />

            {/* Navbar */}
            <AccountNavBar />

            {/* Tab */}
                <Suspense >
                    <Routes>
                        <Route exact path="*" name="Citizen Dashboard Page" element={<Home />} />
                        <Route exact path="/newPickUp" name="Admin Dashboard Page" element={<NewPickUp />} />
                        <Route exact path="/allPickUps" name="Driver Dashboard Page" element={<AllPickUps />} />
                    </Routes>
                </Suspense>

        </Box>
    )
}

export default Citizen;