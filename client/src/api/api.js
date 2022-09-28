import { Alert } from "@mui/material";
import React, { createContext, useState, useEffect, useContext } from "react"
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const setCookie = (email, firstName) => {
    cookies.set('email',email, { path: '/', maxAge: 2592000 });
    cookies.set('firstName', firstName, { path: '/', maxAge: 2592000 });
    console.log(cookies.get('email'));
}

const setLogin = (email, firstName) => {
    setCookie(email, firstName);
}

export const postRegisterForm = async (finalValues) => {
    try {
    const res = await fetch('http://localhost:8000/add', {
        method: 'POST',
        body: JSON.stringify(finalValues),
        headers: {
            'Content-Type': 'application/json'
        },
    });
        if (res.status == 200) {
            const response = await res.json();
            alert(res[0]);
            setLogin(finalValues['email'], finalValues['firstName']);
            Alert(res.msg);
            return res.uid;
        } else {
            Alert(res);
            return 0;
        }
        
    } catch (error) {
        console.log('Error while calling addUser api', error);

        return 0;
    }
    
};

export const postPickUpRequest = async (finalValues) => {
    console.log("inside postPickUpRequest");
    try{
        const res = await fetch('http://localhost:8000/addPickUp', {
            method: 'POST',
            body: JSON.stringify(finalValues),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (res.status == 200) {
            const response = await res.json();
            alert(response);
            return 1;
        } else {
            return 0;
        }
    }catch{
    
    }
}

export const getNearbyPlaces = async (query, lat, long, limit = 5, radius = 10000) => {
    let baseUrl = 'https://api.tomtom.com/search/2/poiSearch';
    let queryString = `limit=${limit}&lat=${lat}&lon=${long}&radius=${radius}&key=g9V9sGqvIMdVtmAgA1gjsBcXyV7Qc1gg`;
    let response = await fetch(`${baseUrl}/${query}.json?${queryString}`)
    return response.json();
}


// https://api.tomtom.com/search/2/poiSearch/tha.json?limit=5&lat=19.2217&lon=72.8596&radius=10000&key=g9V9sGqvIMdVtmAgA1gjsBcXyV7Qc1gg