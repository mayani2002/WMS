import React, { useState, useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Card, Typography, Button } from '@mui/material';
import { Container } from '@mui/system';
import Iconify from '../Iconify';
import { getPendingPickUpRequests, getIdleTrucks } from '../api/api';

const Schedule = () => {
    const [pendingRequests, setPendingRequests] = useState();
    const [idleTrucks, setIdleTrucks] = useState();

    useEffect(() => {
        console.log('Hello!');
        const pendingRequestsPromise = getPendingPickUpRequests();
        const idleTrucksPromise = getIdleTrucks();
        console.log('Pending PickUp Requests Promise: ', pendingRequestsPromise);
        console.log('Available Trucks Promise: ', idleTrucksPromise);
    }, []);

    return (
        <Container sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant="h3" mb={2}>Begin Scheduling!</Typography>
            <Card sx={{ width: '500px' }}>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{height: 'fit-content'}}>
                            <Button 
                                variant="outlined" 
                                onClick={() => console.log("Fetch Pending Requests & Idle Trucks")} 
                                startIcon={<Iconify icon="mdi:trending-down" />}
                            >
                                Fetch Data
                            </Button>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{height: 'fit-content'}}>
                            <Button 
                                variant="outlined" 
                                onClick={() => console.log("Start Grouping and Allocation")} 
                                startIcon={<Iconify icon="mdi:group" />}
                            >
                                Start Grouping and Allocation
                            </Button>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem sx={{height: 'fit-content'}}>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent sx={{height: 'fit-content'}}>
                            <Button 
                                variant="outlined" 
                                onClick={() => console.log("Start Grouping and Allocation")} 
                                startIcon={<Iconify icon="mdi:calculator-variant-outline" />}
                            >
                                Calculate Routes
                            </Button>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Card>
        </Container>
    )
}

export default Schedule;