import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
// import NavBar from "../components/NavBar";
import Map from "../components/Map";
import MiniDrawer from "../components/MiniDrawer";
import TruckTimeline from "../components/TruckTimeLine";
import SearchLocationMap from "../components/SearchLocationMap";
import LocationRoutingMap from "../components/LocationRoutingMap";
import SlotRoute from "../components/SlotRoute";
import Iconify from '../Iconify.js';
import GarbageAmountCard from "../components/GarbageAmountCard"; 

const DefaultLayout = () => {
    return (
        <Box>
            <MiniDrawer>

                {/* <NavBar></NavBar> */}
                <Box sx={{ width: "100vw", minHeight:"100vh", height: "auto", display: "flex", justifyContent: "Space-around", backgroundColor:"#E6FABF" }}>
                    <Box sx={{ width: "100%", display: "flex",width:"auto", flexDirection:"column", alignItems:"center" }} >
                        <Typography variant="h5" sx={{mt:4,}}><b>Today's pick-up slots </b></Typography>
                        {/* <TruckTimeline></TruckTimeline> */}
                        <SlotRoute></SlotRoute>
                    </Box>
                    <Box sx={{ m: "30px", height: 'fit-content' }}>
                        <LocationRoutingMap></LocationRoutingMap>
                    </Box>
                    <GarbageAmountCard></GarbageAmountCard>
                   
                </Box>
            </MiniDrawer>
        </Box>

    )

}

export default DefaultLayout;
