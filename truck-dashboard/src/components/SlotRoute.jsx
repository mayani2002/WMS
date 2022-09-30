import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TruckTimeline from './TruckTimeLine';
import { Box } from '@mui/system';

export default function SlotRoute() {
    return (
        <Box sx={{width: "400px", }}>
            <Accordion disabled sx={{ m: 2, }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography sx={{ color: "Green" }}>Task Accomplished !</Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion sx={{ m: 2, backgroundColor: "rgba(255, 255, 255, 0.63)" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"

                >
                    <Typography sx={{ color: "orange" }}>Task 2</Typography>
                </AccordionSummary>
                <AccordionDetails  sx={{ height: "400px", overflow: "scroll" }}>
                    <TruckTimeline></TruckTimeline>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ m: 2, backgroundColor: "rgba(255, 255, 255, 0.63)" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography sx={{ color: "orange" }}>Task 3</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ height: "400px", overflow: "scroll" }}>
                    <TruckTimeline></TruckTimeline>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
