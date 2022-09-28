import React from "react";
import { Box, Button } from "@mui/material";
import Map from "../components/Map";
// import NavBar from "../components/NavBar";
import MiniDrawer from "../components/MiniDrawer";
import TruckTimeline from "../components/TimeLine";
import SearchLocationMap from "../components/SearchLocationMap";
import LocationRoutingMap from "../components/LocationRoutingMap";
import { Link as RouterLink } from 'react-router-dom';
import Iconify from '../Iconify.js';


const DefaultLayout = () => {
    return (
        <Box>
            <MiniDrawer>

            {/* <NavBar></NavBar> */}
            <Box sx={{ width: "100%", height: "100vh", display:"flex", justifyContent:"Space-around"}}>
        
                <TruckTimeline></TruckTimeline> 
                <Box> 
                    <Box sx={{ m : "30px" }}>
                        <LocationRoutingMap></LocationRoutingMap>
                    </Box>
                    {/* <Button variant="outlined" sx = {{ ml: '30px'}}>
                        Show Route
                    </Button> */}
                </Box>
            </Box>
            </MiniDrawer>
        </Box>

    )

}

export default DefaultLayout;
