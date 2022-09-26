import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from '../../components/NavBar';

import routes from '../../routes';


const User = () => {
    return (
        <Box sx={{ backgroundColor: "linear-gradient(360deg, #E2FCAF 6.05 %, rgba(224, 235, 202, 0) 108.4 %)" }}>
            <NavBar></NavBar>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: '70px' }}>
                <Suspense>
                    <Routes>
                        {/* {console.log(routes)}; */}
                        {routes.map((route, idx) => {
                            return (
                                route.element && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        element={<route.element />}
                                    />
                                )
                            )
                        })}
                        <Route path="/" element={<Navigate to="landing" replace />} />
                    </Routes>
                </Suspense>
            </Box>
        </Box>
    )

}

export default User;