import { Typography, Box, Button, Link } from '@mui/material';
import React from 'react';

const UpperSection = () => {
    return (

        <Box sx={{ m: 17, backgroundColor: " linear - gradient(360deg, #E2FCAF 6.05 %, rgba(224, 235, 202, 0) 108.4 %)" }}>
            
            <Typography variant="h1">Schedule <br /> Now !!</Typography>
            <Typography variant="subtitle2">Schedule your Grabage pickup 24 hours before </Typography>
            <Button sx={{ mt: 9, mb: 9, backgroundColor: "black" }} variant="contained">Register</Button>
            {/* <Typography variant="body1">Schedule your Grabage pickup 24 hours before </Typography> */}
            <Box>
                <Link>Already user? | Login</Link>
            </Box>
        </Box >

    )
}

export default UpperSection;