import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box, Avatar, CardMedia, SvgIcon } from '@mui/material';
import NavBar from '../../components/NavBar';
import { ReactComponent as bgIcon } from '../../asset/Bg1.svg';
import routes from '../../routes';
import { borderRadius } from '@mui/system';


const User = () => {
    return (
        
        <Box sx={{ backgroundColor: "#E2FCAF" }}>
            <NavBar></NavBar>
            
            <SvgIcon sx={{
                mr: 6,  position: "fixed", display: "flex",right:"0px",top:"-5%", width: "40%", height: "100%", }} component={bgIcon} viewBox="0 0 600 476.6" />
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