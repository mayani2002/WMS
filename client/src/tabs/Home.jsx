import { Box, Paper, Container, Typography, Button, CardContent, CardActions, Card } from '@mui/material';
import React from "react";

import TrackPickUp from '../components/TrackPickUp';
import PickUpOptions from '../components/PickUpOptions';

const Home = () => {
    return (
        <Box sx={{ pl: 10, display: "flex", flexDirection: "row" }}>

            <PickUpOptions/>
            <Box sx={{ ml: 4, mr: 4, display: "flex", flexDirection: "column" }}>
                <TrackPickUp />
            </Box>
        </Box>

    )
}

export default Home;