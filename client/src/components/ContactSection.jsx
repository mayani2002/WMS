import { Typography, Box, Button, TextField, Link } from '@mui/material';
import React from 'react';

const ContactSection = () => {
    return (
        <Box sx={{ m: 17, mt:30, mb:30, display: "flex" }}>
            <Box >
                <Typography variant="h3">Contact</Typography>
                <Typography sx={{ mt: 3, mb: 3, width: "300px" }} variant="subtitle2">Questions or concerns?Just fill out the form below and our support team will get back to you within 24 hours </Typography>

            </Box >
            <Box
                component="form"
                sx={{
                    ml: "10%",
                    '& > :not(style)': { m: 1, width: "450px" },
                }}
                noValidate
                autoComplete="off"
            >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <TextField
                        required
                        id="outlined-required"
                        label="First Name"
                        defaultValue=""
                    // onChange={handleChange}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Last Name"
                        defaultValue=""
                    // onChange={handleChange}
                    />
                </Box>
                <TextField label="Phone No." id="fullWidth" />
                <Box>
                    <Button sx={{ ml: "40%", backgroundColor: "black", alignItems: "center" }} variant="contained">Submit Now</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactSection;