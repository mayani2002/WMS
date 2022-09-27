import React from "react";
import { Box, Paper, Container, Typography, Button, CardContent, CardActions, Card } from '@mui/material';


const PickUpOptions = () => {
    return (
        <Paper sx={{ backgroundColor: "rgba(255, 255, 255, 0.52)", p: 3, display: "inline-block" }}>

            <Card sx={{ maxWidth: "275px", m: "30px" }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Present PickUp Request
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Show</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: "275px", m: "30px" }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Scheduled PickUp Request
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Show</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: "275px", m: "30px" }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Past PickUp Request
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Show</Button>
                </CardActions>
            </Card>
        </Paper>
    )
}

export default PickUpOptions;

