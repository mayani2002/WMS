import { Paper, Box, Card, CardContent, CardMedia, IconButton, Typography, Button, PhotoCamera, Stack } from "@mui/material";

import { useNavigate } from 'react-router-dom';
import React from "react";


const TrackPickUp = () => {

    return (
        // <Paper sx={{ p:5, backgroundColor: "black", color: "white"}}>
        <Card sx={{ p: 2, backgroundColor: "black", color: "white" }}>
            <Typography sx component="div" variant="h5">
                Current Pick Up Tracking
            </Typography>
            <Box sx={{ m: 2, display: 'flex', color: "white" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>

                        <Typography variant="subtitle1" color="white" component="div">
                            25-09-2022, SUN , 15:50
                        </Typography>

                        <Typography variant="subtitle1" color="white" component="div">
                            Type :  Dry
                        </Typography>

                        <Typography variant="subtitle1" color="white" component="div">
                            Weight: 4 kg
                        </Typography>
                    </CardContent>

                </Box>
                <Box>
                    <CardMedia
                        component="img"
                        sx={{ width: "100px", height: "100px" }}
                        image="../asset/trash.jpg"
                        alt="trash img"
                    />
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button sx={{ backgroundColor: "#FDCC62" }} variant="contained" component="label">
                            Upload
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                    </Stack>
                </Box>

            </Box >
        </Card>
        // </Paper>
    )
}

export default TrackPickUp; 