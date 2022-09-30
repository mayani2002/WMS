import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// const GarbageCollected = (
//     <React.Fragment>

//     </React.Fragment>
// );

// const TotalGarbage = (
//     <React.Fragment>
//         <CardContent>
//             <Typography variant="h5" component="div">
//                 Total Garbage Capacity
//             </Typography>
//             <Box sx={{ borderRadius: "50%", height: "300px", width: "300px", border: "8px solid #FFF6C6" }}>
//                 12000 KG
//             </Box>
//         </CardContent>
//         <CardActions>
//             <Button size="small">Learn More</Button>
//         </CardActions>
//     </React.Fragment>
// );

const GarbageAmountCard = () => {
    return (
        <Box sx={{ minWidth: 170 }}>
            <Card variant="outlined" sx={{ m: 3, backgroundColor:"#BDF3A3"}}>
                <CardContent sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <Typography variant="subtitle1" component="div">
                        Total Garbage Collected
                    </Typography>
                    <Box sx={{
                        borderRadius: "50%",
                        height: "170px",
                        width: "170px",
                        border: "8px solid #FFF6C6",
                        display: "flex",
                        justifyContent: "center",
                        alignItems:"center"
                    }}>

                        <Typography variant="h5" component="div">
                            <b>1890 KG</b>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{ m: 3, backgroundColor: "#BDF3A3" }}>
                <CardContent sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <Typography variant="subtitle1" component="div">
                        Total Garbage Capacity
                    </Typography>
                    <Box sx={{
                        borderRadius: "50%",
                        height: "170px",
                        width: "170px",
                        border: "8px solid #FFF6C6",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>

                        <Typography variant="h5" component="div">
                            <b>12000 KG</b>
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
export default GarbageAmountCard;