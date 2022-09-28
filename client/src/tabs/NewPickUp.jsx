import React from "react";
import { useRef, useEffect, useState } from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, Paper, Typography, AppBar, Toolbar, TextField, Button, MenuItem, Select, InputLabel, Container } from "@mui/material";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { getCoordinatesFromAddress, postPickUpRequest } from "../api/api";
import SearchLocationMap from "../components/SearchLocationMap";

const NewPickUp = () => {
    const [date, setdate] = useState(new Date('2022-09-29T21:11:54'));
    const [slot, setSlot] = useState('6am-9am');
    const [wasteType, setWasteType] = useState('Dry Waste');
    const [weight, setWeight] = useState('');
    const [address, setAddress] = useState("");
    
    // const [error, setError] = React.useState({});

    const handleDateChange = (newDate) => {
        setdate(newDate);
    };
    const handleSlotChange = (event) => {
        
    };
    const handleWasteTypeChange = (event) => {
        setWasteType(event.target.value);
    };
    const handleWeightTypeChange = (event) => {
        console.log(event.target.value);
        setWeight(event.target.value);
    };
    
    const handlePickUpSubmit = async (event) => {
        let timeSlotNo = null;
        if (slot == '6am-9am') timeSlotNo = 1;
        else if (slot == '10am-1pm') timeSlotNo = 2;
        else if (slot == '2pm-5pm') timeSlotNo = 3;
        else if (slot == '6pm-9pm') timeSlotNo = 4;
        
        var allValues = {
            'date': date,
            'timeSlotNo': timeSlotNo.toString(),
            'garbageType': wasteType,
            'approxGarbageWeight': weight,
            'pickUpAddress': address,
            'requestStatus': 'Pending',
            'requestId': `${Math.random().toString(36).slice(2).toUpperCase()}`
        }
        console.log(allValues);

        const res = await postPickUpRequest(allValues);
        const res2 = await getCoordinatesFromAddress(address);
        
        if (res) {
            console.log(res);
        }

        // if (res2) {
        //     console.log(res2);
        // }
    };
    
    return (
        <form style={{display: 'flex'}}>
            <Paper sx={{ ml: 10, backgroundColor: "rgba(255, 255, 255, 0.52)", p: 3, display: "inline-block", width: '70%', height: 'auto' }}>
                <Typography sx={{ m:"50px", mt:'10px' }} variant="h3">Schedule Request</Typography>
                    <Box>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                                sx={{ m: 3}}
                            label="Date mobile"
                            inputFormat="MM/dd/yyyy"
                            value={date}
                            onChange={handleDateChange}
                            required
                            renderInput={(params) => <TextField {...params} />}
                        />
                        </LocalizationProvider>
                        <br/>
                    <Select
                        sx={{ m: 1, minWidth: 120 }}
                        // labelId="slot"
                        id="slot"
                        value={slot}
                        label="Slot"
                        required
                        onChange={handleSlotChange}
                    >
                        <MenuItem value='6am-9am'>6am-9am</MenuItem>
                        <MenuItem value='10am-1pm'>10am-1pm</MenuItem>
                        <MenuItem value='2pm-5pm'>2pm-5pm</MenuItem>
                        <MenuItem value='6pm-9pm'>6pm-9pm</MenuItem>
                    </Select>
                    {/* <br /> */}
                    <Select
                        sx={{ m: 1, minWidth: 120 }}
                        // labelId="Waste Type"
                        id="waste type"
                        value={wasteType}
                        label="Waste Type"
                        required
                        onChange={handleWasteTypeChange}
                    >
                        <MenuItem value='Dry Waste'>Dry Waste</MenuItem>
                        <MenuItem value='Wet Waste'>Wet Waste</MenuItem>
                        <MenuItem value='Electronic Waste'>Electronic</MenuItem>
                    </Select>
                    <br />
                    <TextField
                        style={{ m:3,width: "200px", margin: "5px" }}
                            type="text"
                            id="weight"
                            label="Apx. weight in Kg"
                            variant="outlined"
                            // value={weight}
                            onChange={handleWeightTypeChange}
                        required
                    />
                    {/* <br />
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Location"
                        variant="outlined"
                    /> */}
                    </Box>
                    <Button
                        sx={{ m: 2, p: 2, backgroundColor: "black" }}
                        onClick={handlePickUpSubmit}
                        variant="contained"
                        color="primary">
                        Schedule
                    </Button>
            </Paper>
            <Container sx = {{ }}>
                <SearchLocationMap
                    address = {address}
                    setAddress = {setAddress}
                    width = '500' 
                    height = '500' />
            </Container>
        </form>
    )
}

export default NewPickUp;
