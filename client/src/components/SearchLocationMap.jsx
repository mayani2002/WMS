import React from "react";
import { useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";
import * as tt from "@tomtom-international/web-sdk-maps";
import LocationSearchBox from "./LocationSearchBox";

const SearchLocationMap = (props) => {
    const mapElement = useRef();
    const [map, setMap] = useState();

    useEffect(() => {
        let map = tt.map({
            key: "g9V9sGqvIMdVtmAgA1gjsBcXyV7Qc1gg",
            container: mapElement.current,
        })

        setMap(map);

        return () => map.remove();
    }, [])

    return (
        <Box ref = {mapElement} sx={{ width: parseInt(props.width), height: parseInt(props.height) }}>
            <LocationSearchBox 
                address = {props.address}
                setAddress = {props.setAddress}
            />
        </Box>
    )
}

export default SearchLocationMap;