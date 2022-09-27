import React from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, Paper, Typography, AppBar, Toolbar, TextField, Button, MenuItem, Select, InputLabel } from "@mui/material";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { postPickUpRequest } from "../api/api";

const NewPickUp = () => {
    const [date, setdate] = React.useState(new Date('2022-09-29T21:11:54'));
    const [slot, setSlot] = React.useState('6am-9am');
    const [wasteType, setWasteType] = React.useState('Dry Waste');
    const [weight, setWeight] = React.useState('');
    // const [error, setError] = React.useState({});

    const handleDateChange = (newDate) => {
        setdate(newDate);
    };
    const handleSlotChange = (event) => {
        setSlot(event.target.value);
    };
    const handleWasteTypeChange = (event) => {
        setWasteType(event.target.value);
    };
    const handleWeightTypeChange = (event) => {
        setWeight(event.target.value);
    };
    
    const handlePickUpSubmit = async (event) => {
        var allValues = {
            'date': date,
            'slot': slot,
            'wasteType': wasteType,
            'weight': weight,
        }
        const res = await postPickUpRequest(allValues);
        
        if (res) {
            console.log(res);
        }
    };
    
    return (
        <Paper sx={{ ml: 10, backgroundColor: "rgba(255, 255, 255, 0.52)", p: 3, display: "inline-block" }}>
            <Typography sx={{ m:"50px"}} variant="h3">Schedule Request</Typography>
            <form>
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
                        onClick={(handleWeightTypeChange)}
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
                <Box></Box>
                <Button
                    sx={{ m: 2, p: 2, backgroundColor: "black" }}
                    onClick={handlePickUpSubmit}
                    variant="contained"
                    color="primary">
                    Schedule
                </Button>
            </form>

        </Paper >
    )
}

export default NewPickUp;
