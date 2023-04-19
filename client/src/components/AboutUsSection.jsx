import { Typography, Box, Button, Link } from '@mui/material';
import React from 'react';

const AboutUsSection = () => {
    return (
        <Box sx={{ m: 17, mt: 30, }}>
            <Typography variant="h3">Problem we are trying to solve:</Typography>
            <Typography sx={{ mt: 5, mb: 3, width: "600px" }} variant="subtitle2">
                With increasing populations, changing policy requirements, new sustainability and recycling goals and improved technology   departments, municipalities across the globe are joining the “smart cities” movement to become more efficient in managing solid   waste. 

                Thus, the improvement of the urban waste collection service and, in general, the achievement of a more efficient management of the  waste, is one of the main challenges that the cities face, especially due to the population growth. Thus, smart waste management is  a key factor of smart cities.

                Therefore, we plan to design a smart waste collection system that allows citizens to segregate the various types of solid waste     they want to dispose of and the municipal authorities to efficiently collect the same.
            </Typography>
            <Box>
                <Link>
                    Learn more
                </Link>
            </Box>
        </Box >
    )
}

export default AboutUsSection;