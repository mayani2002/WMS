import React from 'react';
import { Typography, Box,  TextField, Link } from '@mui/material';
import UpperSection from '../../components/UpperSection';
import AboutUsSection from '../../components/AboutUsSection';
import ContactSection from '../../components/ContactSection';

const Landing = () => {
    return (
        <Box>
            <UpperSection></UpperSection>
            <AboutUsSection></AboutUsSection>
            <ContactSection></ContactSection>
        </Box>
    )
}

export default Landing;