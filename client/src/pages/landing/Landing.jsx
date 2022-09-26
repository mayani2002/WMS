import React from 'react';
import { Typography, Box, Button, TextField, Link } from '@mui/material';
import NavBar from '../../components/NavBar';
import UpperSection from '../../components/UpperSection'
import AboutUsSection from '../../components/AboutUsSection'
import ContactSection from '../../components/ContactSection';

const Landing = () => {
    return (
        <Box sx={{ backgroundColor:"linear-gradient(360deg, #E2FCAF 6.05 %, rgba(224, 235, 202, 0) 108.4 %)" }}>
            <NavBar></NavBar>
            <UpperSection></UpperSection>
            <AboutUsSection></AboutUsSection>
            <ContactSection></ContactSection>
        </Box>
    )
}

export default Landing;