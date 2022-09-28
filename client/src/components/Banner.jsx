import { Typography } from "@mui/material";
import React from "react";

const Banner = (props) => {
    return (
        <>
            {
                props.geoError ? <p className="banner warn">{props.geoError.message}</p> :
                props.geoLocation.latitude ? 
                <p className="banner success">
                    Lat: <strong>{props.geoLocation.latitude.toFixed(4)}</strong>, 
                    Long: <strong>{props.geoLocation.longitude.toFixed(4)}</strong>
                </p> :
                <Typography variant="h4">Hello From Bruce Banner</Typography>       
            }
        </>
    )
}

export default Banner;