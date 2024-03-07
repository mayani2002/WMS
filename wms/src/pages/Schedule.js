import React, { useState, useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Card, Typography, Button } from '@mui/material';
import { Container } from '@mui/system';
import { LoadingButton } from '@mui/lab';
import Iconify from '../Iconify';
import { getPendingPickUpRequests, getIdleTrucks } from '../api/api';

/*  eslint prefer-const: ["error", {"ignoreReadBeforeAssign": false}]    */

const Schedule = () => {
    const [fetchDataLoading, setFetchDataLoading] = useState(false);
    const [pendingRequests, setPendingRequests] = useState();
    const [idleTrucks, setIdleTrucks] = useState();

    const finalPendingRequestGroups = [];
    const finalPendingRequestGroupLocations = [];

    const fetchData = () => {
        setFetchDataLoading(true);
        const pendingRequestsPromise = getPendingPickUpRequests();
        const idleTrucksPromise = getIdleTrucks();
        // console.log('Pending PickUp Requests Promise: ', pendingRequestsPromise);
        // console.log('Available Trucks Promise: ', idleTrucksPromise);
        pendingRequestsPromise.then((res) => {
            setPendingRequests(res);
        });
        idleTrucksPromise.then((res) => {
            setIdleTrucks(res);
            if (pendingRequests !== null && idleTrucks !== null) {
                setTimeout(() => {
                    setFetchDataLoading(false);
                    console.log(idleTrucks);
                    console.log(pendingRequests);
                }, 500);
            }
        });
    }

    const startGroupingAndAllocation = () => {
        groupRequestsOnBasisOfGType();
    }

    const groupRequestsOnBasisOfGType = () => {
        const pendingRequestsWithEWaste = [];
        const pendingRequestsWithDryWaste = [];
        const pendingRequestsWithWetWaste = [];

        for (let i = 0; i < pendingRequests.length; i+=1) {
            if (pendingRequests[i].garbageType === "electronic")
                pendingRequestsWithEWaste.push(pendingRequests[i]);
            else if (pendingRequests[i].garbageType === "wet")
                pendingRequestsWithWetWaste.push(pendingRequests[i]);
            else if (pendingRequests[i].garbageType === "dry")
                pendingRequestsWithDryWaste.push(pendingRequests[i]);
        }

        groupRequestsOnBasisOfTSlots(pendingRequestsWithEWaste);
        groupRequestsOnBasisOfTSlots(pendingRequestsWithWetWaste);
        groupRequestsOnBasisOfTSlots(pendingRequestsWithDryWaste);
    }

    const groupRequestsOnBasisOfTSlots = (pendingPickUpRequestsWithSameGType) => {
        const pendingRequestsWithTSlot1 = [];
        const pendingRequestsWithTSlot2 = [];
        const pendingRequestsWithTSlot3 = [];
        const pendingRequestsWithTSlot4 = [];

        for (let i = 0; i < pendingPickUpRequestsWithSameGType.length; i+=1) {
            if (pendingPickUpRequestsWithSameGType[i].timeSlotNo === 1) {
                pendingRequestsWithTSlot1.push(pendingPickUpRequestsWithSameGType[i]);
            }
            else if (pendingPickUpRequestsWithSameGType[i].timeSlotNo === 2) {
                pendingRequestsWithTSlot2.push(pendingPickUpRequestsWithSameGType[i]);
            }
            else if (pendingPickUpRequestsWithSameGType[i].timeSlotNo === 3) {
                pendingRequestsWithTSlot3.push(pendingPickUpRequestsWithSameGType[i]);
            }
            else if (pendingPickUpRequestsWithSameGType[i].timeSlotNo === 4) {
                pendingRequestsWithTSlot4.push(pendingPickUpRequestsWithSameGType[i]);
            }
        }

        console.log(pendingRequestsWithTSlot1);
        console.log(pendingRequestsWithTSlot2);
        console.log(pendingRequestsWithTSlot3);
        console.log(pendingRequestsWithTSlot4);

        finalPendingRequestGroups.push(pendingRequestsWithTSlot1);
        finalPendingRequestGroups.push(pendingRequestsWithTSlot2);
        finalPendingRequestGroups.push(pendingRequestsWithTSlot3);
        finalPendingRequestGroups.push(pendingRequestsWithTSlot4);

        for (let i = 0; i < finalPendingRequestGroups.length; i += 1) {
            if (finalPendingRequestGroups[i].length !== 0) {
                console.log(`Latitude: ${finalPendingRequestGroups[i][0].latitude}`);
                console.log(`Longitude:  ${finalPendingRequestGroups[i][0].longitude}`);
                for (let j = 0; j < finalPendingRequestGroups[i].length; j += 1) {
                    finalPendingRequestGroupLocations.push({
                        "location": [finalPendingRequestGroups[i][j].latitude, finalPendingRequestGroups[i][j].longitude]
                    })
                }
            }
        }

        console.log(finalPendingRequestGroupLocations);
    }

    const caclulateRoute = () => {

    }

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
                            <LoadingButton
                                loading={fetchDataLoading}
                                loadingPosition="start"
                                variant="outlined"
                                onClick={() => fetchData()}
                                startIcon={<Iconify icon="mdi:trending-down" />}
                            >
                                Fetch Data
                            </LoadingButton>
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
                                onClick={() => startGroupingAndAllocation()}
                                startIcon={<Iconify icon="mdi:group" />}
                            >
                                Start Grouping
                            </Button>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem sx={{height: 'fit-content'}}>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{height: 'fit-content'}}>
                            <Button
                                variant="outlined"
                                onClick={() => console.log("Calculate Routes")}
                                startIcon={<Iconify icon="mdi:calculator-variant-outline" />}
                            >
                                Calculate Routes
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
                                startIcon={<Iconify icon="ic:outline-assignment-turned-in" />}
                            >
                                Allocate Trucks
                            </Button>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Card>
        </Container>
    )
}

export default Schedule;
