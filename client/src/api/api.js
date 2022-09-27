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
            alert(response);
            setLogin(finalValues['email'], finalValues['firstName']);
            return 1;
        } else {
            return 0;
        }
        
    } catch (error) {
        console.log('Error while calling addUser api', error);

        return 0;
    }
    
};