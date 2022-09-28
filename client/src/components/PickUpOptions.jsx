import React from "react";
import { Box, Paper, Container, Typography, Button, CardContent, CardActions, Card } from '@mui/material';
import { useNavigate } from "react-router-dom";

const PickUpOptions = () => {
    
    const navigate = useNavigate();
    
    const navigateTo = (location) => {
        navigate(location);
    }
    return (
        <Paper sx={{ backgroundColor: "rgba(255, 255, 255, 0.52)", p: 3, display: "inline-block" }}>

            <Card sx={{ maxWidth: "275px", m: "30px" }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Present PickUp Request
                    </Typography>
                </CardContent>
                <CardActions onClick={() => navigateTo('/allPickUps')}>
                    <Button size="small">Show</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: "275px", m: "30px" }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Scheduled PickUp Request
                    </Typography>
                </CardContent>
                <CardActions onClick={() => navigateTo('/allPickUps')} >
                    <Button size="small">Show</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: "275px", m: "30px" }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Past PickUp Request
                    </Typography>
                </CardContent>
                <CardActions onClick={() => navigateTo('/allPickUps')}>
                    <Button size="small">Show</Button>
                </CardActions>
            </Card>
        </Paper>
    )
}

export default PickUpOptions;

