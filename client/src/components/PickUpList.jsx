import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, CardContent, styled, Paper, Stack, Button, Avatar, List, ListItem, ListItemAvatar, ListItemText, DialogTitle, Dialog, } from '@mui/material';

import { getPickUpInfo } from '../api/api';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    paddingInline: "30px",
    textAlign: 'center',
    border: '1px solid black',
    color: theme.palette.text.secondary,
}));

const PickUpRecord = ['29-09-2022/6am-9am', '29-09-2022/2am-5am', '30-09-2022/6am-9am', '27-09-2022/6am-9am', '25-09-2022/6am-9am',];

const PickUpDetail = (props) => {
    const { onClose, selectedValue, open } = props;

    const showPickUp = async(pickUpId) => {
        const res = await getPickUpInfo(pickUpId);
        if (res) {

        }
    }

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog paperWidthXs  onClose={handleClose} open={open}>
            <DialogTitle>Pick-up Reqiest Details</DialogTitle>
            <Box sx={{ m: 2,}}>

                <Box sx={{ display:"flex", justifyContent: "center", }}>
                    <img
                        style={{ width: "100px", height: "100px", }}
                        src="https://as2.ftcdn.net/v2/jpg/00/32/52/65/1000_F_32526547_ejjKQfFEEEceGt9EqagrZ6BLlzsoVJc0.jpg"
                        alt="trash img"
                    />
                </Box>

                <Box sx = {{ display: 'flex', flexDirection: 'column', width:"250px" }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="subtitle1" component="div">
                            <b>Date</b>: 25-09-2022
                        </Typography>

                        <Typography variant="subtitle1" component="div">
                            <b>Slot</b>: 6am-9am
                        </Typography>

                        <Typography variant="subtitle1" component="div">
                            <b>Type</b>: Dry Waste
                        </Typography>

                        <Typography variant="subtitle1" component="div">
                            <b>Weight</b>: 4 kg
                        </Typography>

                        <Typography variant="subtitle1" component="div">
                        <b>Address</b>: "Vaishali Ghaziabad, Vaishali, Ghaziabad, Delhi NCR"
                        </Typography>

                        <Typography variant="subtitle1" component="div">
                        <b>Status</b>: PickUp Approved
                        </Typography>
                    </CardContent>

                </Box>
            </Box >
            </Dialog>
    );

}

PickUpDetail.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function PickUpList(props) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(PickUpRecord[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    }

        return (
            <div>
                <Paper sx={{ m: 4, backgroundColor: "rgba(255, 255, 255, 0.52)", p: 3, display: "flex", flexDirection: "column", alignItems: "center", height: "auto" }}>
                    <Typography variant="h5">{props.title}</Typography>
                    <Stack sx={{ m: 1, }} spacing={2}>
                        {PickUpRecord.map((pickUp, index) =>
                            <Button sx={{ m: 0 }} key={index} onClick={handleClickOpen}>
                                <Item>{pickUp}</Item>
                            </Button>
                        )}
                    </Stack>
                </Paper>

                <PickUpDetail
                    selectedValue={selectedValue}
                    open={open}
                    onClose={handleClose} >
                </PickUpDetail>
            </div>
    );
}

