import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from '../../components/NavBar';

import routes from '../routes.js';


const User = () => {
    return (
        <Box>
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
                        <Route path="/" element={<Navigate to="Home" replace />} />
                    </Routes>
                </Suspense>
            </Box>
        </Box>
    )

}
            
export default User;