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
    console.log(finalValues);
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
            return res;
        } 
        
    } catch (error) {
        console.log('Error while calling addUser api', error);

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
            return res;
        } 
    }catch(error){
        console.log('Error while calling addPickUp api', error);
    }
}


export const getPickUpInfo = async (pickUpId) => {
    console.log("inside getPickUp Client");
    try {
        const res = await fetch('http://localhost:8000/getPickUp');
        if (res.status === 200) {
            const response = await res.json();
            return response;
        }

    } catch (error) {
        console.log('Error while calling getPickUp api', error);
    }
}