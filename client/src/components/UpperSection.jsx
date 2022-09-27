import { Typography, Box, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const UpperSection = () => {
    const navigate = useNavigate();

    const navigateTo = (location) => {
        navigate(location);
    };
    return (

        <Box sx={{ m: 15, }}>

            <Typography variant="h1">Schedule <br /> Now !!</Typography>
            <Typography variant="subtitle2">Schedule your Grabage pickup 24 hours before </Typography>
            <Button sx={{ mt: 7, mb: 7, backgroundColor: "black", }} variant="contained" onClick={() => navigateTo('/register')}>Register</Button>
            {/* <Typography variant="body1">Schedule your Grabage pickup 24 hours before </Typography> */}
            <Box>
                <Link onClick={() => navigateTo('/login')}>Already user? | Login</Link>
            </Box>
        </Box >

    )
}

export default UpperSection;